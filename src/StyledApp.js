import styled from 'styled-components';

export const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.color};
`;
