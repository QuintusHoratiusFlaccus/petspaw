import styled from 'styled-components'

export const StyledModalWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: flex-end;
  background: rgba(29, 29, 29, 0.6);
  z-index: 1;
  
  .modal_indicator {
    font-size: 20px;
    line-height: 30px;
    color: #8C8C8C;
    max-width: 600px;
    word-wrap: anywhere;
    margin: 20px 0;
  }
  
  .modal_window {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 720px;
    margin: 30px;
    border-radius: 20px;
    background: ${({ theme }) => theme.modalBg};
    padding: 20px;
  }
`
