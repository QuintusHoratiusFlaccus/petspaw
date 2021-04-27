import NavElement from './NavElement/NavElement.jsx';

import VoteTableSVG
  from './../../../../Dist/Content/LeftPanel/Navigation/NavElement/Card/vote-table.svg';
import PetBreadsSVG
  from './../../../../Dist/Content/LeftPanel/Navigation/NavElement/Card/pet-breeds.svg';
import ImgSearchSVG
  from './../../../../Dist/Content/LeftPanel/Navigation/NavElement/Card/images-search.svg';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.wrapper}>
      <NavElement
        background="#B4B7FF"
        text="VOTING"
        path="voting"
      >
        <img src={VoteTableSVG} alt=""/>
      </NavElement>
      <NavElement
        background="#97EAB9"
        text="BREEDS"
        path="breeds"
      >
        <img src={PetBreadsSVG} alt=""/>
      </NavElement>
      <NavElement
        background="#FFD280"
        text="GALLERY"
        path="gallery"
      >
        <img src={ImgSearchSVG} alt=""/>
      </NavElement>
    </nav>
  )
}

export default Navigation;
