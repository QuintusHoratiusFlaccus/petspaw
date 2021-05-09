import styled from 'styled-components'

export const StyledSpan = styled.span`
  width: 100%;
  height: 29px;
  color: #8C8C8C;
  font-size: 19px;
  line-height: 30px;
  margin-bottom: 20px;
  > span {
    color: ${({ theme }) => theme.text};
  }
`