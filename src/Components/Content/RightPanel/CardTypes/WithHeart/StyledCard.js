import styled, { css } from 'styled-components'
import FilledHeartSVG from '../../../../../Dist/Content/RightPanel/Voting/Buttons/redHeart.svg'
import HeartSVG from '../../../../../Dist/Content/RightPanel/Voting/Buttons/heartRed.svg'

export const StyledCard = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 20px;
  transition: .15s;

  :hover {
    background-color: rgba(255, 134, 142, 0.6);
  }

  .hoverContent_action {
    display: flex;
    align-items: center;
    opacity: 0;
  }

  :hover > .hoverContent_action {
    opacity: 1;
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.cardBg};
    border-radius: 10px;
    background-image: url(${props => props.heartState ? FilledHeartSVG : HeartSVG});
    background-position: center center;
    background-repeat: no-repeat;
  }
`