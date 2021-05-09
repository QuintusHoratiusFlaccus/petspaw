import styled, { css } from 'styled-components'

export const StyledSelect = styled.select`
  display:flex;
  position:relative;
  flex-direction: column;
  width: ${(props) => props.width || '100%'};
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #8C8C8C;

  ${props => props.breeds && css`
    background-color: ${({ theme }) => theme.breedsSelectColor};
    min-width: 90px;
  `}
  ${props => props.gallery && css`
    background-color: ${({ theme }) => theme.selectColor};
  `}
  :hover {
    border: 2px solid rgba(255, 134, 142, 0.2);
  }

  .option {
    padding: 0 30px 0 10px;
    min-height: 40px;
    display: flex;
    align-items: center;
    background: #333;
    border-top: #222 solid 1px;
    position: absolute;
    top: 0;
    width: 100%;
    pointer-events: none;
    order: 2;
    z-index: 1;
    transition: background .4s ease-in-out;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;

  }

  .option:hover {
    background: #666;
  }

  .select:focus .option {
    position: relative;
    pointer-events: all;
  }

  > input {
    opacity: 0;
    position: absolute;
    left: -99999px;
  }

  > input:checked + label {
    order: 1;
    z-index: 2;
    background: #666;
    border-top: none;
    position: relative;
  }

  > input:checked + label:after {
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;
    position: absolute;
    right: 10px;
    top: calc(50% - 2.5px);
    pointer-events: none;
    z-index: 3;
  }

  > input:checked + label:before {
    position: absolute;
    right: 0;
    height: 40px;
    width: 40px;
    content: '';
    background: #666;
  }
`
