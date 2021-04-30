import styled, {css} from 'styled-components';

export const GaleryLayout = styled.div`
  display: grid;
  width: 100%;
  height: 500px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
  'one two three'
  'one four four'
  'five four four';
  grid-gap: 15px;
  border-radius: 20px;
  padding: 20px;

  ${props => props.reversed && css`
    grid-template-areas:
    'one two three'
    'five five three'
    'five five four';
  `}

  .one {
    grid-area: one;
  }

  .two {
    grid-area: two;
  }

  .three {
    grid-area: three;
  }

  .four {
    grid-area: four;
  }

  .five {
    grid-area: five;
  }

`
