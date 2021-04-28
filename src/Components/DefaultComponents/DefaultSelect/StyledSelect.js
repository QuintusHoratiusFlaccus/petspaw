import styled, {css} from 'styled-components';

export const StyledSelect = styled.select`
  width: ${(props) => props.width || '100%'};
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  outline: none;

  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #8C8C8C;

  ${props => props.breeds && css`
    background-color: ${({ theme }) => theme.componentsSecond};
    min-width: 90px;
  `}
  ${props => props.gallery && css`
    background-color: ${({ theme }) => theme.selectColor};
  `}
  :hover {
    border: 2px solid rgba(255, 134, 142, 0.2);
  }
`
