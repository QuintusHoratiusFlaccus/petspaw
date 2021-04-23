// import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { ReactComponent as DoggyFootprintSVG }
  from './../../../../Dist/Content/LeftPanel/Logo.svg';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <DoggyFootprintSVG/>
      <h1 className={s.header_title}>PetsPaw</h1>
    </header>
  )
}

export default Header;
