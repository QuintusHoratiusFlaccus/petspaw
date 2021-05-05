import styled, { css, keyframes } from 'styled-components'

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 172px;
  height: 40px;
  border-radius: 10px;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  transition: 0.1s;

  background-color: #FF868E;
  color: #FFFFFF;
  font-family: Jost;
  font-weight: 200;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 2px;
  :hover {
    background-color: #FBE0DC;
    color: #FF868E;
  }
  
  > img {
    margin: 0 10px;
    animation: ${loading} 1.2s linear infinite;
  }
  
  ${props => props.btnState === 'uploading' && css`
    :hover {
      background-color: #FF868E;
      color: #FFFFFF;
    }
  `}
  
`
