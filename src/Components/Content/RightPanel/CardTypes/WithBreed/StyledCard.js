import styled, { css } from 'styled-components'
import FilledHeartSVG from '../../../../../Dist/Content/RightPanel/Voting/Buttons/redHeart.svg'
import HeartSVG from '../../../../../Dist/Content/RightPanel/Voting/Buttons/heartRed.svg'

export const StyledCard = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 20px;
  transition: .15s;
  align-items: flex-end;
  padding-bottom: 20px;

  :hover {
    color: #FF868E;
    background-color: rgba(255, 134, 142, 0.6);
  }

  .hoverContent_action {
    display: flex;
    align-items: center;
    opacity: 0;
  }

  :hover > .hoverContent_action {
    min-height: 34px;
    max-width: 80%;
    opacity: 1;
    padding: 0 15px;
    background-color: ${({ theme }) => theme.cardBg};
    border-radius: 10px;
    line-height: 24px;
    font-size: 16px;
  }
`