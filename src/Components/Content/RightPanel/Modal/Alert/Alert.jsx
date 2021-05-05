import React from 'react'
import { StyledAlert } from './StyledAlert'
import ErrorSVG from './../../../../../Dist/Content/RightPanel/Modal/Alert/error.svg'
import SuccessSVG from './../../../../../Dist/Content/RightPanel/Modal/Alert/success.svg'

const Alert = ({ type = 'success' }) => {
    const alertTypes = {
        error: {
            img: ErrorSVG,
            text: 'No Dog found - try a different one',
        },
        success: {
            img: SuccessSVG,
            text: 'Thanks for the Upload - Dog found!',
        },
    }

    return (
        <StyledAlert>
            <img src={alertTypes[type].img} alt=""/>
            <span>{alertTypes[type].text}</span>
        </StyledAlert>
    )
}

export default Alert
