// import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import s from './LeftPanel.module.css';

import Header from './Header/Header.jsx';

const LeftPanel = () => {
  return (
    <section className={s.wrapper}>
      <Header/>
      <div className={s.appeal}>
        <span className={s.appeal_first}>Hi intern!</span>
        <span className={s.appeal_second}>Welcome to MSI 2021 Front-end test</span>
        <span className={s.appeal_third}>Lets start using The Dogs API</span>
      </div>

    </section>
  )
}

export default LeftPanel;
