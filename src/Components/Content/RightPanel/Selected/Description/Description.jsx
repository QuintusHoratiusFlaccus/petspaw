import { StyledWrapper } from './StyledWrapper.js';

const Description = () => {
  return (
    <StyledWrapper>
      <span className="description_name">
        Basenji
      </span>
      <span className="description_characteristic">Family companion dog</span>
      <div className="description_temperament">
        <span>Temperament:</span>
        <span className="description_data">sadjoashfoiahfa</span>
      </div>
      <div className="description_height">
        <span>Height:</span>
        <span className="description_data">aaaaaaaaaaa</span>
      </div>
      <div className="description_weight">
        <span>Weight:</span>
        <span className="description_data"></span>
      </div>
      <div className="description_lifeSpan">
        <span>Life span:</span>
        <span className="description_data"></span>
      </div>
    </StyledWrapper>
  )
}

export default Description;
