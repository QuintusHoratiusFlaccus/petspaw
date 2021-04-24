import { useState } from 'react';
// import { useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import VoteTableSVG
  from './../../../../Dist/Content/LeftPanel/Navigation/NavElement/Card/vote-table.svg';
import PetBreadsSVG
  from './../../../../Dist/Content/LeftPanel/Navigation/NavElement/Card/pet-breeds.svg';
import ImgSearchSVG
  from './../../../../Dist/Content/LeftPanel/Navigation/NavElement/Card/images-search.svg';
import s from './Navigation.module.css';
import NavElement from './NavElement/NavElement.jsx';

const Navigation = () => {
  const [listItem, setListItem] = useState(null);



  return (
    <nav className={s.wrapper}>
      <NavElement
        background="#B4B7FF"
        text="VOTING"
        path="voting"
      >
        <img src={VoteTableSVG}/>
      </NavElement>
      <NavElement
        background="#97EAB9"
        text="BREEDS"
        path="breeds"
      >
        <img src={PetBreadsSVG}/>
      </NavElement>
      <NavElement
        background="#FFD280"
        text="GALLERY"
        path="gallery"
      >
        <img src={ImgSearchSVG}/>
      </NavElement>
    </nav>
  )
}

export default Navigation;
