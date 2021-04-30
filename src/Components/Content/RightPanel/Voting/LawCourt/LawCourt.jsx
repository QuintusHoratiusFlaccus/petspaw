import ButtonsSet from './JudgementButtons/ButtonsSet.jsx';

import s from './LawCourt.module.css';

const LawCourt = ({image, ...props}) => {
  return (
    <div className={s.lawCourt}>
      <img
        className={s.lawCourt_image}
        src={image}
        alt="suspect"
      />
      <ButtonsSet/>
    </div>
  )
}

export default LawCourt;
