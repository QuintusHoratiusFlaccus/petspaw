// import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { StyledWrapper } from './StyledWrapper.js';
import URLIndication from './URLIndication/URLIndication.jsx';

const ContentHead = ({left, children}) => {
  return (
    <StyledWrapper left={left}>
      <URLIndication/>
      {children}
    </StyledWrapper>
  )
}

export default ContentHead;
