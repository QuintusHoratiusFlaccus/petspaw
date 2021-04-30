import ParamsButton from
  './../../../../DefaultComponents/DefaultButton/DefaultButton.jsx';
  import ParamsSelect from './ParamsSpecifySelect/ParamsSelect.jsx';

import ReloadPinkSVG from
  './../../../../../Dist/Content/RightPanel/Gallery/reloadPink.svg';
import ReloadWhiteSVG from
  './../../../../../Dist/Content/RightPanel/Gallery/reloadWhite.svg';
import { StyledWrapper } from './StyledWrapper.js';

const SearchParams = () => {
  return (
    <StyledWrapper>
      <div>
        <ParamsSelect
          gallery
          title="ORDER"
          width="50%"
        />
        <ParamsSelect
          gallery
          title="TYPE"
          width="50%"
        />
      </div>
      <div>
        <ParamsSelect
          gallery
          title="BREED"
          width="50%"
        />
        <ParamsSelect
          gallery
          title="LIMIT"
        />
        <ParamsButton
          white
          backgroundImage={ReloadPinkSVG}
          bgImageHover={ReloadWhiteSVG}
        />
      </div>
    </StyledWrapper>
  )
}

export default SearchParams;
