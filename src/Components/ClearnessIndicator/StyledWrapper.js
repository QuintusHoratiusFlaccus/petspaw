import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  min-height: 60px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.votingActionLogs};
  border-radius: 10px;
  padding: 0 20px;

  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;

  .text {
    color: #8C8C8C;
  }
`
