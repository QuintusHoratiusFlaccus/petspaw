import { useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux'

import s from './CurrLink.module.css';

const CurrLink = () => {
  const location = useLocation().pathname.slice(1).toUpperCase();

  return (
    <span className={s.currLink}>{location}</span>
  )
}

export default CurrLink;
