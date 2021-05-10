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
  padding: 0 10px;

  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  
  .action_time {
    width: 61px;
    height: 30px;
    background: #FFFFFF;
    border-radius: 5px;
    color: #1D1D1D;
    text-align: center;
    margin-right: 20px;
  }

  .action_quote {
    color: #8C8C8C;
  }

  .action_image_id {
    margin: 0 4px;
  }
  
  .action_svg {
    height: 20px;
    width: 20px;
    position: absolute;
    right: 20px;
  }
`
