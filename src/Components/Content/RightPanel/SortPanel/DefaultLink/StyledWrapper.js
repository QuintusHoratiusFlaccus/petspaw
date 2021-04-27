import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.componentsMain};
  border-radius: 20px;
  margin-left: 10px;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 20px;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-position: center center;
    transition: 0.2s;
    :hover:not(.active) {
      background: #FBE0DC;
    }
  }
`
