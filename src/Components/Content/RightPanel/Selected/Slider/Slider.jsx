import SliderSwitch from './SliderSwitch/SliderSwitch'

import s from './Slider.module.css'
import { useState } from 'react'

const Slider = ({ images }) => {
    const [slideIndex, setSlideIndex] = useState(0)

    function handleChange(e) {
        setSlideIndex(e.currentTarget.value)
    }

    return (
        <div className={s.slider}>
            <img
                className={s.slider_image}
                src={images[slideIndex]?.url}
                alt="suspect"
            />
            <SliderSwitch
                handleChange={handleChange}
                images={images}
            >

            </SliderSwitch>
        </div>
    )
}

export default Slider