import React from 'react'
import SecondNav from './../SecondNav/SecondNav.jsx'
import { ContentWrapper } from './ContentWrapper.js'
import { GlobalWrapper } from './GlobalWrapper.js'

const Wrapper = ({ children }) => {
    return (
        <GlobalWrapper>
            <SecondNav/>
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </GlobalWrapper>
    )
}

export default Wrapper
