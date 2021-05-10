import { NavLink } from 'react-router-dom'
import Button from './Button/Button.jsx'
import Card from './Card/Card.jsx'
import s from './NavElement.module.css'

const NavElement = ({ text, background, children, path }) => {
    return (
        <NavLink
            className={s.nawLink}
            activeClassName={s.active}
            to={`/${path}`}
        >
            <Card background={background}>
                {children}
            </Card>
            <Button text={text}/>
        </NavLink>
    )
}

export default NavElement
