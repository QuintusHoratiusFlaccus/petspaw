import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  display: flex;
  width: 256px;
  transform: translate(-50%);
  justify-content: space-between;
  border-radius: 21px;
  border: 4px solid transparent;
  background-color: ${({theme}) => theme.votingButtonsBg};
`
