import React from 'react'
import { StyledButton } from './StyledButton.js'

const ActionButton = ({image_id, voteEvent, ...props}) => {
    return (
        <StyledButton
            onClick={(e) => {voteEvent(e.target.id, image_id)}}
            {...props}
        >

        </StyledButton>
    )
}

export default ActionButton
