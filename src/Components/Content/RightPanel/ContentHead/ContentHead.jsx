import React from 'react'
import { StyledWrapper } from './StyledWrapper.js'
import URLIndication from './URLIndication/URLIndication.jsx'

const ContentHead = ({ left, children }) => {
    return (
        <StyledWrapper left={left}>
            <URLIndication/>
            {children}
        </StyledWrapper>
    )
}

export default ContentHead
