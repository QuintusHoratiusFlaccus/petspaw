import styled, { css } from 'styled-components'

export const GalleryLayout = styled.div`
  display: grid;
  width: 100%;
  height: 470px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(25%, 1fr));
  grid-template-areas:
    'one three two'
    'four four two'
    'four four five';
  
  grid-gap: 15px;
  border-radius: 20px;
  padding: 0 0 20px 0;

  ${props => props.reversed && css`
    grid-template-areas:
    'two one three'
    'two five five'
    'four five five';
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
