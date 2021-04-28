import ParamsSelect from
  './../../../../DefaultComponents/DefaultSelect/DefaultSelect.jsx';
import ParamsButton from
  './../../../../DefaultComponents/DefaultButton/DefaultButton.jsx';

import AbtUpGraySVG from
  './../../../../../Dist/Content/RightPanel/Breeds/ContentHeadAdd/abtUpGray.svg';
import AbtDownGraySVG from
  './../../../../../Dist/Content/RightPanel/Breeds/ContentHeadAdd/abtDownGray.svg';
import AbtUpPinkSVG from
  './../../../../../Dist/Content/RightPanel/Breeds/ContentHeadAdd/abtUpPink.svg';
import AbtDownPinkSVG from
  './../../../../../Dist/Content/RightPanel/Breeds/ContentHeadAdd/abtDownPink.svg';
import s from './SearchParams.module.css';

const SearchParams = () => {
  return (
    <div className={s.wrapper}>
      <ParamsSelect
        breeds
        placeholder="All breeds"
      />
      <ParamsSelect
        width="25%"
        breeds
        placeholder="Limit: 1&"
      />
      <ParamsButton
        alphabet
        backgroundImage={AbtUpGraySVG}
        bgImageHover={AbtUpPinkSVG}
      />
      <ParamsButton
        alphabet
        backgroundImage={AbtDownGraySVG}
        bgImageHover={AbtDownPinkSVG}
      />
    </div>
  )
}

export default SearchParams;
