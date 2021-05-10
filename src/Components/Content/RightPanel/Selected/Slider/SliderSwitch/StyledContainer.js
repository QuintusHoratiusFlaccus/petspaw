import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: absolute;
  left: 50%;
  width: 90px;
  height: 30px;
  bottom: -17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 21px;
  border: 4px solid transparent;
  transform: translate(-50%);
  background-color: ${({ theme }) => theme.votingButtonsBg};
  padding: 0 8px;
  
  .container {
    width: 10px;
    height: 10px;
    position: relative;
    cursor: pointer;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border: none;
    border-radius: 10px;
    background-color: rgba(255, 134, 142, 0.2);
    padding: 0;
    cursor: pointer;
  }

  .container:hover input ~ .checkmark {
    background-color: rgba(255, 134, 142, 0.3);
  }

  .container input:checked ~ .checkmark {
    background-color: #FF868E;
  }
`