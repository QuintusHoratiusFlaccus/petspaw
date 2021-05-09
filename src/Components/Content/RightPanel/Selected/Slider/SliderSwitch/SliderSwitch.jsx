import { StyledContainer } from './StyledContainer.js'

const SlideSwitch = ({ images, handleChange }) => {
    const buttons = images.map((el, i) => (
        <label key={`${i}_key`} className="container">
            <input
                onClick={handleChange}
                value={i}
                name="checkbox_slider"
                type="radio"
                defaultChecked={!i?true:false}
            />
            <span className="checkmark"></span>
        </label>
    ))

    return (
        <StyledContainer>
            {buttons}
        </StyledContainer>
    )
}

export default SlideSwitch