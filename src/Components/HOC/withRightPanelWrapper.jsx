import React from 'react'
import SecondNav from '../Content/RightPanel/SecondNav/SecondNav'
import { ContentWrapper } from '../Content/RightPanel/Wrappers/ContentWrapper'
import { GlobalWrapper } from '../Content/RightPanel/Wrappers/GlobalWrapper'

const withRightPanelWrapper = Component => (props) => {
    return (
        <GlobalWrapper>
            <SecondNav/>
            <ContentWrapper>
                <Component {...props}/>
            </ContentWrapper>
        </GlobalWrapper>
    )
}

export default withRightPanelWrapper
