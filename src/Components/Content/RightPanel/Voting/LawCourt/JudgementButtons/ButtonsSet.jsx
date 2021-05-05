import ActionButton from './ActionButton/ActionButton.jsx'

import GrimWhiteSVG from
    './../../../../../../Dist/Content/RightPanel/Voting/Buttons/grimWhite.svg'
import GrimYellowSVG from
    './../../../../../../Dist/Content/RightPanel/Voting/Buttons/grimYellow.svg'
import HearthRedSVG from
    '../../../../../../Dist/Content/RightPanel/Voting/Buttons/heartRed.svg'
import HearthWhiteSVG from
    '../../../../../../Dist/Content/RightPanel/Voting/Buttons/heartWhite.svg'
import HeartWhiteFilledSVG from
    './../../../../../../Dist/Content/RightPanel/Voting/Buttons/heartWhiteFilled.svg'
import SmileGreenSVG from
    './../../../../../../Dist/Content/RightPanel/Voting/Buttons/smileGreen.svg'
import SmileWhiteSVG from
    './../../../../../../Dist/Content/RightPanel/Voting/Buttons/smileWhite.svg'

import { StyledContainer } from './StyledContainer.js'

const ButtonsSet = ({ image_id, voteEvent, favClick, isFav }) => {
    return (
        <StyledContainer>
            <ActionButton
                onClick={voteEvent}
                id="1"
                image_id={image_id}

                bgColor="#97EAB9"
                borderRadius="20px 0 0 20px"
                bgImage={SmileWhiteSVG}
                bgHoverImage={SmileGreenSVG}
                bgHoverColor="rgba(151, 234, 185, 0.3)"
            />
            <ActionButton
                onClick={() => {
                    favClick(isFav)
                }}
                isFav={isFav}

                bgColor="#FF868E"
                bgImage={HearthWhiteSVG}
                bgHoverImage={HearthRedSVG}
                bgHoverColor="rgba(255, 134, 142, 0.3)"
                selected={HeartWhiteFilledSVG}
            />
            <ActionButton
                onClick={voteEvent}
                id="0"
                image_id={image_id}

                bgColor="#FFD280"
                borderRadius="0 20px 20px 0"
                bgImage={GrimWhiteSVG}
                bgHoverImage={GrimYellowSVG}
                bgHoverColor="rgba(255, 210, 128, 0.3)"
            />
        </StyledContainer>
    )
}

export default ButtonsSet
