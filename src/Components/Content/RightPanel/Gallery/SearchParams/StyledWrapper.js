import styled from 'styled-components'

export const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 160px;
  background-color: ${({ theme }) => theme.sortParamsBg};
  border-radius: 20px;
  padding: 0 10px;
  margin-bottom: 20px;
  > div {
    display: flex;
    align-items: flex-end;
    width: 100%;
  }
`
