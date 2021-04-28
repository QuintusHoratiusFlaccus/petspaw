import styled from 'styled-components';
import s from './Button.module.css';

const StyledButton = styled.button`
  width: 100%;
  height: 36px;
  background-color: ${({ theme }) => theme.componentsSecond};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const Button = ({text, ...props}) => {
  return (
    <StyledButton>
      <span className={s.button_text}>
        {text}
      </span>
    </StyledButton>
  )
}

export default Button;
