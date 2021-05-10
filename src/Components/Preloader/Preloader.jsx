import React from 'react'
import { StyledPreloader } from './StyledPreloader'
import { ReactComponent as PreloaderSVG } from './../../Dist/Content/RightPanel/Preloader/preloader.svg'

const Preloader = () => {
    return (
        <StyledPreloader>
            <PreloaderSVG/>
        </StyledPreloader>
    )
}

export default Preloader