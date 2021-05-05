import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  height: 80px;
  width: 80px;
  border: none;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: ${props => props.bgColor || '#FFF'};
  background-image: url(${props => props.bgImage});
  border-radius: ${({ borderRadius }) => borderRadius};
  transition: .2s;
  :hover {
    background-color: ${props => props.bgHoverColor || '#FFF'};
    background-image: url(${props => props.bgHoverImage});
  }
  ${props => props.isFav === true && css`
    background-image: url(${props => props.selected});
    :hover {
      background-color: ${props => props.bgColor || '#FFF'};
      background-image: url(${props => props.selected});
    }
  `}
`
