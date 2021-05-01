import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: absolute;
  display: flex;
  width: 90px;
  height: 30px;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  justify-content: space-between;
  border-radius: 21px;
  border: 4px solid transparent;
  background-color: ${({theme}) => theme.votingButtonsBg};
  padding: 0 8px;

  .switch_element {
    width: 10px;
    height: 10px;
    border: none;
    border-radius: 10px;
    background: rgba(255, 134, 142, 0.2);
    padding: 0;
    cursor: pointer;
  }
`
