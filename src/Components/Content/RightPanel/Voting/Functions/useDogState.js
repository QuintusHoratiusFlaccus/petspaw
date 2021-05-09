import { useEffect, useLayoutEffect, useState } from 'react'
import { api } from '../../../../../Services/Api'
import { voteActions } from '../../../../../Redux/Actions/voteActions'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFavourites } from '../../../../../Redux/Constants/Sagas/Constants'

export const useDogState = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.favouritesData.favouritesList)
    const [suspect, setSuspect] = useState()
    const [isFav, setFav] = useState(false)
    const [favId, setFavId] = useState()

    const [componentMounted, setComponentMounted] = useState(false)

    const getRandomDog = async () => {
        try {
            const res = await api.images.getRandomDog()
            setSuspect(res.data[0])
        } catch (e) {
            console.log('Error' + e)
        }
    } 

    useEffect(() => {
        getRandomDog()
        setComponentMounted(true)
    }, [])

    //Like/dislike needed in nice interfaces. used twice #mustpdate
    const _dispatchCompose= (action) => {
        dispatch(voteActions({
            id: suspect.id,
            action: action
        }))
        const keyWord = action.split('_')[0]
        dispatch({
            type: fetchFavourites[keyWord],
            payload: {
                image_id: suspect.id,
                image: {
                    id: suspect.id,
                    url: suspect.url
                }
            }
        })
    }

    const _loveDoggy = async () => {
        await api.favourites.deleteFavourite({ id: favId })
        setFav(false)
        _dispatchCompose('DELETE_FAV')
    }

    const _unloveDoggy = async () => {
        const resp = await api.favourites.postAsAFavourite({ image_id: suspect.id })
        setFav(true)
        setFavId(resp.data.id)
        _dispatchCompose('ADD_FAV')
    }

    const favClick = (favourite) => {
        try {
            favourite ? _loveDoggy() : _unloveDoggy()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (selector.length && suspect) {
            const isExist = selector.find((el) => {
                return el.image_id === suspect.id
            })

            if (isExist) {
                setFav(true)
            }
        }
    }, [selector])

    useEffect(() => {
        setFav(false)
    }, [suspect])

    return [suspect, getRandomDog,
        isFav, favClick,
        componentMounted]
}
