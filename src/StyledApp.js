import styled from 'styled-components';

export const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  height: 100%;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;
