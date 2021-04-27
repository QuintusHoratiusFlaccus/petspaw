import s from './SortPanel.module.css';
import SearchField from './SearchField/SearchField.jsx';
import DefaultLink from './DefaultLink/DefaultLink.jsx';

import SmileSVG
  from './../../../../Dist/Content/RightPanel/SortPanel/smile.svg';
import HeartSVG
  from './../../../../Dist/Content/RightPanel/SortPanel/heart.svg';
import GrimSVG
  from './../../../../Dist/Content/RightPanel/SortPanel/grim.svg';

const SortPanel = (props) => {
  return (
      <div className={s.sortPanel}>
        <SearchField/>
        <DefaultLink image={SmileSVG}>
        
        </DefaultLink>
        <DefaultLink>
          <img src={HeartSVG} alt=""/>
        </DefaultLink>
        <DefaultLink>
          <img src={GrimSVG} alt=""/>
        </DefaultLink>
      </div>
  )
}

export default SortPanel;
