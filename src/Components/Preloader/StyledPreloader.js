import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`
export const StyledPreloader = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 100px);
  background-color: ${({ theme }) => theme.preloaderBg};
  z-index: 1;
  top: 70px;
  left: 0px;

  > svg {
    animation: ${loading} 1.2s linear infinite;
  }
`
