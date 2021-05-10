import styled, { css } from 'styled-components'

export const StyledSelect = styled.div`

  width: ${props => props.width || '100%'};
  position: relative;
  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 40px;
  color: #8C8C8C;
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  background-color: ${({ theme }) => theme.selectColor};
  
  :hover {
    border: 2px solid rgba(255, 134, 142, 0.2);
  }
  
  .default-select__selected {
    padding-left: 6%;
    width: 100%;
    user-select: none;
  }

  .default-select__dropdown {
    position: absolute;
    z-index: 999;
    top: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.selectColor};
    max-height: 400px;
    overflow-y: auto;
    border-radius: 10px;
  }
  
  .default-select__dropdown-option {
    padding-left: 6%;
    overflow-x: hidden;
    user-select: none;
  }

  .default-select__dropdown-option:hover {
    background-color: #FF868E;
  }
  
  > svg {
    position: absolute;
    top: 40%;
    right: 7px;
  }

  ${props => props.breeds && css`
    background-color: ${({ theme }) => theme.breedsSelectColor};
    min-width: 90px;
    .default-select__dropdown {
      background-color: ${({ theme }) => theme.breedsSelectColor};
    }
  `}
  ${props => props.gallery && css`
    background-color: ${({ theme }) => theme.selectColor};
    .default-select__dropdown {
      background-color: ${({ theme }) => theme.selectColor};
    }
  `}
`
