import styled, { css } from 'styled-components'
import HeartSVG from '../../../Dist/Content/RightPanel/Voting/Buttons/heartRed.svg'
import FilledHeartSVG from '../../../Dist/Content/RightPanel/Voting/Buttons/redHeart.svg'

export const StyledCard = styled.button`
  position: relative;
  width: 100%;
  border-radius: 20px;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

`
