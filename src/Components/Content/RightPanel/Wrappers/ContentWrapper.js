import styled from 'styled-components';

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
  border-radius: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.componentsMain};
`
