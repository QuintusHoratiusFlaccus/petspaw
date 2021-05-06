import { useEffect, useState } from 'react'
import { api } from '../../../../../Services/Api'
import { voteActions } from '../../../../../Redux/Actions/voteActions'
import { useDispatch, useSelector } from 'react-redux'

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

    const dispatchVote = (action) => {
        dispatch(voteActions({
            id: suspect.id,
            action: action
        }))
    }

    const favClick = async (favourite) => {
        try {
            if (favourite) {
                await api.favourites.deleteFavourite({ id: favId })
                setFav(false)
                dispatchVote('DELETE_FAV')
                return
            }
            if (!favourite) {
                const resp = await api.favourites.postAsAFavourite({ image_id: suspect.id })
                setFav(true)
                setFavId(resp.data.id)
                dispatchVote('ADD_FAV')
                return
            }
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     if (selector.length) {
    //         const localFav = selector?.find((el) => {
    //             console.log(1, el.id)
    //             console.log(2, suspect.id)
    //
    //             return el.id === suspect.id
    //         })
    //         favClick(localFav)
    //     }
    // }, [selector])

    useEffect(() => {
        setFav(false)
    }, [suspect])

    return [suspect, getRandomDog, 
        isFav, favClick,
        componentMounted]
}
