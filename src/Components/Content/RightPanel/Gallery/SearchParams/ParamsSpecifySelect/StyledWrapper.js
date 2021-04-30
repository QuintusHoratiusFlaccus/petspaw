import styled, {css} from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 10px 10px 0 10px;
  width: ${props => props.width};
  ${props => !props.width && css`
      flex-grow: 1;
    `}
  > span {
    display: block;
    font-size: 10px;
    line-height: 18px;
    color: #8C8C8C;
    padding-left: 8px;
  }
`
