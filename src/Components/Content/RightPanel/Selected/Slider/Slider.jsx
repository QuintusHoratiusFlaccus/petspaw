import SlideSwitch from './SlideSwitch/SlideSwitch.jsx';

import s from './Slider.module.css';

const Slider = ({image}) => {
  return (
    <div className={s.slider}>
      <img
        className={s.slider_image}
        src={image}
        alt="suspect"
      />
      <SlideSwitch></SlideSwitch>
    </div>
  )
}

export default Slider;
