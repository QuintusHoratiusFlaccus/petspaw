import {NavLink} from 'react-router-dom';
import {StyledWrapper} from './StyledWrapper.js';
import s from './DefaultLink.module.css';

const DefaultLink = ({image, path, children, ...props}) => {
  return (
      <StyledWrapper image={image}>
        <NavLink
          activeClassName={s.active}
          to={`/${path}`}
        >
          {children}
        </NavLink>
      </StyledWrapper>
  )
}

export default DefaultLink;
