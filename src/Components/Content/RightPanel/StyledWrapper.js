import styled, {css} from 'styled-components';

export const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 560px;
  margin: 30px;
  border-radius: 20px;
  ${props => props.home && css`
    background-color: ${({ theme }) => theme.mainPage};
    > div {
      position: absolute;
      top: -30px;
      left: -30px;
      height: 100%;
      width: 100%;
    }
    svg {
      height: 100%;
      width: 100%;
    }
  `}
`
