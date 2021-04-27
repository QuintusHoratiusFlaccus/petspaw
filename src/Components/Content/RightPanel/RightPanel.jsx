// import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { StyledWrapper } from './StyledWrapper.js';
import SortPanel from './SortPanel/SortPanel.jsx';

const RightPanel = ({backgroundImg, children}) => {
  return (
    <StyledWrapper backgroundImg={backgroundImg}>
      {
        !backgroundImg ? <SortPanel/> : null
      }
      {children}
    </StyledWrapper>
  )
}

export default RightPanel;
