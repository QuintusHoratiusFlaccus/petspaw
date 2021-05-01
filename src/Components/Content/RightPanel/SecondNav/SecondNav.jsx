import s from './SecondNav.module.css'
import SearchField from './SearchField/SearchField.jsx'
import DefaultLink from './DefaultLink/DefaultLink.jsx'

import SmileSVG
    from './../../../../Dist/Content/RightPanel/SecondNav/smile.svg'
import HeartSVG
    from './../../../../Dist/Content/RightPanel/SecondNav/heart.svg'
import GrimSVG
    from './../../../../Dist/Content/RightPanel/SecondNav/grim.svg'


const SecondNav = (props) => {
    return (
        <div className={s.secondNav}>
            <SearchField/>
            <DefaultLink image={SmileSVG}>

            </DefaultLink>
            <DefaultLink>
                <img src={HeartSVG} alt=""/>
            </DefaultLink>
            <DefaultLink>
                <img src={GrimSVG} alt=""/>
            </DefaultLink>
        </div>
    )
}

export default SecondNav
