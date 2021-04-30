import DefaultSelect from
  './../../../../../DefaultComponents/DefaultSelect/DefaultSelect.jsx';

import { StyledWrapper } from './StyledWrapper.js';

const ParamsSelect = ({width, title, ...props}) => {
  return (
    <StyledWrapper width={width}>
      <span>{title}</span>
      <DefaultSelect
        {...props}
        placeholder="Random&"
      />
    </StyledWrapper>
  )
}

export default ParamsSelect;
