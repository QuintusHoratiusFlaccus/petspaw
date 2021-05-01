import styled, {css} from 'styled-components';

export const StyledWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-radius: 20px;
  ${props => props.left && css`
    justify-content: start;
    `}
`;
