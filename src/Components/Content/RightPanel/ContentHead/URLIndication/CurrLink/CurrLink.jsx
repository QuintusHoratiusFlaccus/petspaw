import { useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux'

import s from './CurrLink.module.css';

const CurrLink = () => {
  const location = useLocation().pathname.split('/');
  const displayableLocation = location[1].toUpperCase();

  return (
    <span
      className={!location[2] ? s.currLink : s.nonExac}
    >
      {displayableLocation}
    </span>
  )
}

export default CurrLink;
