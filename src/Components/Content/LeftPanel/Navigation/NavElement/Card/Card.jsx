import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 198px;
  color: #FF868E;
  background: ${({background}) => background || '#fff'};
  border: 4px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  margin-bottom:10px;
`;

const Card = ({children, ...props}) => {
  return (
    <StyledCard {...props}>
      {children}
    </StyledCard>
  )
}

export default Card;
