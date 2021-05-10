import { StyledCard } from './StyledCard.js'
import { useDispatch, useSelector } from 'react-redux'
import { voteActions } from '../../../../../Redux/Actions/voteActions'
import { fetchFavourites } from '../../../../../Redux/Constants/Sagas/Constants'
import { api } from '../../../../../Services/Api'
import { useState } from 'react'

const HeartCard = (props) => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.favouritesData.favouritesList.find(el => el.image_id == props.image_id))
    const [respId, setRespId] = useState(null)

    const _dispatchCompose= (action) => {
        //this dispatch needed on 2 pages, no more #mustupdate
        dispatch(voteActions({
            id: props.image_id,
            action: action
        }))

        const keyWord = action.split('_')[0]
        dispatch({
            type: fetchFavourites[keyWord],
            payload: {
                //hah[hpahphpahpahphep, memes. need more sweet dreams #mustupdate?
                image_id: props.image_id,//<---
                image: {
                    id: props.image_id,//<---
                    url: props.url
                }
            }
        })
    }

    const _unloveDoggy = async () => {
        await api.favourites.deleteFavourite({ id: respId || selector.id })
        setRespId(null)
        _dispatchCompose('DELETE_FAV')
    }

    const _loveDoggy = async () => {
        const resp = await api.favourites.postAsAFavourite({ image_id: props.image_id })
        setRespId(resp.data.id)
        _dispatchCompose('ADD_FAV')
    }

    const favClick = (favourite) => {
        try {
            favourite ? _unloveDoggy() : _loveDoggy()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <StyledCard
            {...props}
            heartState={!!selector}
            onClick={() => {
                favClick(!!selector)
            }}
        >
            <div className="hoverContent_action"/>
        </StyledCard>
    )
}

export default HeartCard
