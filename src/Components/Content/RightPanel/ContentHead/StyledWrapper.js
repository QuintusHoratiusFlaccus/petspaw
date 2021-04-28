import styled, {css} from 'styled-components';

export const StyledWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  min-width: 520px;
  flex-grow: 1;
  padding: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.componentsMain};
`;
