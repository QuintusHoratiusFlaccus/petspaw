import { StyledCard } from './StyledCard.js'
import { useSelector } from 'react-redux'
import { voteActions } from '../../../../../Redux/Actions/voteActions'
import { fetchFavourites } from '../../../../../Redux/Constants/Sagas/Constants'
import { api } from '../../../../../Services/Api'

const HeartCard = (props) => {
    const selector = useSelector(state => state.favouritesData.favouritesList.find((el) => el.image.id === props.id))

    const _dispatchCompose= (action) => {
        //this dispatch needed on 2 pages, no more #mustupdate
        dispatch(voteActions({
            id: selector.id,
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

    console.log(selector)
    return (
        <StyledCard
            {...props}
            heartState={selector}
        >
            <div className="hoverContent_action"/>
        </StyledCard>
    )
}

export default HeartCard
