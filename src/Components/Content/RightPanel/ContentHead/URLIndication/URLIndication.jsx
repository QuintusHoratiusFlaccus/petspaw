import BackButton from
  './../../../../DefaultComponents/DefaultButton/DefaultButton.jsx';
import CurrLink from './CurrLink/CurrLink.jsx';

import ArrowSVG from
  './../../../../../Dist/Content/RightPanel/ContentHead/arrow.svg';
import ArrowWhiteSVG from
  './../../../../../Dist/Content/RightPanel/ContentHead/arrowWhite.svg';
import s from './URLIndication.module.css';

const URLIndication = () => {
  return (
    <div className={s.wrapper}>
      <BackButton
        backgroundImage={ArrowSVG}
        bgImageHover={ArrowWhiteSVG}
      />
      <CurrLink/>
    </div>
  )
}

export default URLIndication;
