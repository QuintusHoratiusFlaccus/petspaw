import styled, { css } from 'styled-components'

export const StyledDropSpace = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 320px;
  border: 2px dashed rgba(255, 134, 142, 0.2);
  border-radius: 20px;
  background-image: url(${({ theme, bgImage }) => bgImage || theme.modalBgImage});
  background-repeat: no-repeat;
  background-position: center center;
  ${props => props.bgImage && css`
      background-size: auto 90%;
    `}
  ${props => props.resStatus === 'error' && css`
      background-color: rgba(255, 134, 142, 0.2);
  `}

  .dropspace_input {
    display: flex;
    opacity: 0;
    flex: 1;
  }
  
  .dropspace_bgText {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%);
    font-size: 20px;
    line-height: 30px;
    width: max-content;
    pointer-events: none;
  }

  .dropspace_bgText > span {
    color: #8C8C8C;
    margin: 0 5px;
  }
  
  ${({ bgImage }) => bgImage && css`
    .dropspace_bgText {
      transform: scale(0);

    }
  `}
`
