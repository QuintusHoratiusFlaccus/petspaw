import React from 'react'

import { StyledButton } from './StyledButton.js'
import LoaderPNG from './../../../../../Dist/Content/RightPanel/Modal/UploadButton/littleLoader.png'

const UploadButton = ({ btnState, handleClick, ...props }) => {
    return (
        <StyledButton
            {...props}
            btnState={btnState}
            onClick={handleClick}
        >
            {
                btnState === 'uploading' ?
                    <>
                        <img src={LoaderPNG}/>
                        <span>
                        UPLOADING
                        </span>
                    </>
                    :
                    'UPLOAD PHOTO'
            }
        </StyledButton>
    )
}

export default UploadButton
