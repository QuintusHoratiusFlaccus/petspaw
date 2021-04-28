// import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import {StyledSelect} from './StyledSelect.js';

const DefaultSelect = ({placeholder, ...props}) => {
  return (
    <StyledSelect {...props}>
      <option value="" disabled selected hidden>
        {placeholder}
      </option>
    </StyledSelect>
  )

}

export default DefaultSelect;
