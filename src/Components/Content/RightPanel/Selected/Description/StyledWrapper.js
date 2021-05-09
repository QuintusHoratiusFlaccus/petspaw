import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  height: 210px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px repeat(3, 1fr);
  grid-template-areas:
  'characteristic characteristic'
  'temperament height'
  'temperament weight'
  'temperament lifeSpan';
  border-radius: 20px;
  border: 2px solid rgba(255, 134, 142, 0.2);
  padding: 25px 40px;
  margin-top: 25px;
  font-size: 16px;
  line-height: 23px;

  .description_name {
    position: absolute;
    min-width: max-content;
    height: 55px;
    transform: translate(-50%);
    left: 50%;
    top: -31px;
    padding: 0 20px;
    font-size: 36px;
    line-height: 55px;
    background-color: ${({ theme }) => theme.votingButtonsBg};
    border-radius: 20px;
    text-align: center;
  }

  .description_data {
    color: #8C8C8C;
  }

  & > div > span:first-child {
    margin-right: 4px;
  }

  .description_characteristic {
    grid-area: characteristic;
    justify-self: center;
    color: #8C8C8C;
    font-size: 20px;
    line-height: 29px;
  }

  .description_temperament {
    grid-area: temperament;
    display: flex;
    flex-direction: column;
  }

  .description_height {
    grid-area: height;
  }

  .description_weight {
    grid-area: weight;
  }

  .description_lifeSpan {
    grid-area: lifeSpan;
  }
`
