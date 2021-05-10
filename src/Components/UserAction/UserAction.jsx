import { StyledWrapper } from './StyledWrapper.js'
import FavSVG from '../../Dist/Content/RightPanel/Voting/Buttons/heartRed.svg'
import LikeSVG from '../../Dist/Content/RightPanel/Voting/Buttons/smileGreen.svg'
import DislikeSVG from '../../Dist/Content/RightPanel/Voting/Buttons/grimYellow.svg'


const UserAction = (props) => {
    if(!props.imgId) return false
    const events = {
        ADD_FAV: {
            quote: 'was added to Favourites',
            svg: FavSVG,
        },
        DELETE_FAV: {
            quote: 'was removed from Favourites',
            svg: null,
        },
        ADD_DISLIKE: {
            quote: 'was added to Dislikes',
            svg: DislikeSVG,
        },
        ADD_LIKE: {
            quote: 'was added to Likes',
            svg: LikeSVG,
        },
    }

    return (
        <StyledWrapper>
            <span className="action_time">{props.time}</span>
            <span className="action_quote">Image ID:</span>
            <span className="action_image_id">{props.imgId}</span>
            <span className="action_quote">
                {events[props.event].quote}
            </span>

            {
                events[props.event].svg ? (
                    <img
                        className="action_svg"
                        src={events[props.event].svg}
                        alt=""
                    />
                ) : null
            }

        </StyledWrapper>
    )
}

export default UserAction
