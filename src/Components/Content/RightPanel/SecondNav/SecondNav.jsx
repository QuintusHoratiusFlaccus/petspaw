import SearchField from './SearchField/SearchField.jsx'
import DefaultLink from './DefaultLink/DefaultLink.jsx'
import { StyledWrapper } from './StyledWrapper'

import SmileSVG
    from './../../../../Dist/Content/RightPanel/SecondNav/smile.svg'
import HeartSVG
    from './../../../../Dist/Content/RightPanel/SecondNav/heart.svg'
import GrimSVG
    from './../../../../Dist/Content/RightPanel/SecondNav/grim.svg'
import WhiteGrimSVG
    from './../../../../Dist/Content/RightPanel/Voting/Buttons/grimWhite.svg'
import WhiteSmileSVG
    from './../../../../Dist/Content/RightPanel/Voting/Buttons/smileWhite.svg'
import WhiteHeartSVG
    from './../../../../Dist/Content/RightPanel/Voting/Buttons/heartWhite.svg'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'


const SecondNav = () => {
    const history = useHistory()
    const [inputState, setInputState] = useState('')

    const handleChange = (e) => {
        setInputState(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search?q=${inputState}`)
    }

    return (
        <StyledWrapper>
            <SearchField
                value={inputState}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <DefaultLink
                image={SmileSVG}
                activeImage={WhiteSmileSVG}
                path="likes"
            />
            <DefaultLink
                image={HeartSVG}
                activeImage={WhiteHeartSVG}
                path="favourites"
            />
            <DefaultLink
                image={GrimSVG}
                activeImage={WhiteGrimSVG}
                path="dislikes"
            />
        </StyledWrapper>
    )
}

export default SecondNav
