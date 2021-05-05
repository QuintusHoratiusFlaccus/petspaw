import React from 'react'

import { StyledDropSpace } from './StyledDropSpace'

const DragNDrop = ({ resStatus, handleChange, loadedImg }) => {

    return (
        <StyledDropSpace
            bgImage={loadedImg}
            resStatus={resStatus}
        >
            <input
                className="dropspace_input"
                type="file"
                accept="image/*"
                onChange={handleChange}
                id="dada"
            />

            <span className="dropspace_bgText">
                Drag here
                <span>your file or</span>
                Click here
                <span>to upload</span>
            </span>
        </StyledDropSpace>
    )
}

export default DragNDrop
