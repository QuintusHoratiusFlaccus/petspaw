// import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import {StyledButton} from './StyledButton.js';

const ContentButton = ({children, ...props}) => {
  return <StyledButton
           {...props}
         >
           {children}
         </StyledButton>
}

export default ContentButton;
