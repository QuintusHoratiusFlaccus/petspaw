import styled from 'styled-components'

export const StyledAlert = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.modalAlert};
  color: #8C8C8C;
  font-family: Jost;
  font-weight: 200;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2px;
  align-items: center;
  > img {
    padding: 0 20px 0 25px;

  }
`
