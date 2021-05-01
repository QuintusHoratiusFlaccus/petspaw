import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: absolute;
  left: calc(50% - 128px);
  bottom: 0;
  display: flex;
  width: 256px;
  justify-content: space-between;
  border-radius: 21px;
  border: 4px solid transparent;
  background-color: ${({theme}) => theme.votingButtonsBg};
`
