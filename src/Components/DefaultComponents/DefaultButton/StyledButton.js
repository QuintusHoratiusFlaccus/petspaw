import styled, { css } from 'styled-components'
//non reusable styles

export const StyledButton = styled.button`
  position: ${(props) => props.position};
  width: ${props => props.width || '40px'};
  min-width: 40px;
  height: 40px;
  border-radius: 10px;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: rgba(255, 134, 142, 0.2);
  background-image: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  transition: 0.1s;

  :hover {
    color: #FFF;
    background-color: #FF868E;
    background-image: url(${(props) => props.bgImageHover});
  };
  
  ${props => props.search && css`
    right: 0;
    margin: 10px;
  `}
  
  ${props => props.white && css`
    background-color: ${({ theme }) => theme.selectColor}};
    margin: 0px 10px 2px 0;
  `}
  
  ${props => props.alphabet && css`
    border: 2px solid transparent;
    background-color: ${({ theme }) => theme.breedsSelectColor};
    :hover {
      background-color: ${({ theme }) => theme.breedsSelectColor};
      background-image: url(${(props) => props.bgImageHover});
      border: 2px solid #FBE0DC;
    };
  `}

  ${props => props.withText && css`
    color: #FF868E;
    font-family: Jost;
    font-weight: 200;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 2px;
    padding-left: 5%;
    background-position: 20% center;
  `}

  ${props => props.modalBtn && css`
    background-color: ${({ theme }) => theme.modalCloseBtn};
    align-self: flex-end;
    :hover {
      background-color: #FF868E;
    }
  `}
`
