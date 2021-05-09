import { NavLink } from 'react-router-dom'
import { StyledWrapper } from './StyledWrapper.js'

const DefaultLink = ({ image, path, activeImage }) => {
    return (
        <StyledWrapper
            image={image}
            activeImage={activeImage}
        >
            <NavLink 
                activeClassName="active"
                to={`/${path}`}
            />
        </StyledWrapper>
    )
}

export default DefaultLink
