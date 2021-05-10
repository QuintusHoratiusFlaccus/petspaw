import URLIndication from '../Content/RightPanel/ContentHead/URLIndication/URLIndication'
import { StyledWrapper } from '../Content/RightPanel/ContentHead/StyledWrapper'
import React from 'react'

const withContentHead = Component => left => props => {
    return (
        <StyledWrapper left={left}>
            <URLIndication/>
            <Component {...props}/>
        </StyledWrapper>
    )
}

export default withContentHead