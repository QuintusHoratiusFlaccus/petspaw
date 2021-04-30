import ActionButton from './ActionButton/ActionButton.jsx';

import GrimWhiteSVG from
  './../../../../../../Dist/Content/RightPanel/Voting/Buttons/grimWhite.svg';
import GrimYellowSVG from
  './../../../../../../Dist/Content/RightPanel/Voting/Buttons/grimYellow.svg';
import HearthRedSVG from
  './../../../../../../Dist/Content/RightPanel/Voting/Buttons/hearthRed.svg';
import HearthWhiteSVG from
  './../../../../../../Dist/Content/RightPanel/Voting/Buttons/hearthWhite.svg';
import SmileGreenSVG from
  './../../../../../../Dist/Content/RightPanel/Voting/Buttons/smileGreen.svg';
import SmileWhiteSVG from
  './../../../../../../Dist/Content/RightPanel/Voting/Buttons/smileWhite.svg';
import s from './ButtonsSet.module.css';

const ButtonsSet = () => {
  return (
    <div className={s.buttons}>
      <ActionButton
        bgColor="#97EAB9"
        borderRadius="20px 0 0 20px"
        bgImage={SmileWhiteSVG}
        bgHoverImage={SmileGreenSVG}
        bgHoverColor="rgba(151, 234, 185, 0.3)"
      />
      <ActionButton
        bgColor="#FF868E"
        bgImage={HearthWhiteSVG}
        bgHoverImage={HearthRedSVG}
        bgHoverColor="rgba(255, 134, 142, 0.3)"
      />
      <ActionButton
        bgColor="#FFD280"
        borderRadius="0 20px 20px 0"
        bgImage={GrimWhiteSVG}
        bgHoverImage={GrimYellowSVG}
        bgHoverColor="rgba(255, 210, 128, 0.3)"
      />
    </div>
  )
}

export default ButtonsSet;
