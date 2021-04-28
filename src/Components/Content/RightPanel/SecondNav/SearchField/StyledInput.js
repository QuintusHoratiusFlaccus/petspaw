import styled from 'styled-components';

export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.componentsMain};
  color: #8C8C8C;
  padding: 0 0 0 17px;
  border: none;
  border-radius: 20px;
  outline:none;
  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 30px;
  border: 2px solid transparent;
  :focus {
    border: 2px solid #FF868E;
  }
  :hover:not(:focus) {
    border: 2px solid #FBE0DC;
  }
`
