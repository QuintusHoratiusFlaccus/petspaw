import BackButton from
    './../../../../DefaultComponents/DefaultButton/DefaultButton.jsx'
import CurrLink from './CurrLink/CurrLink.jsx'

import ArrowSVG from
    './../../../../../Dist/Content/RightPanel/ContentHead/arrow.svg'
import ArrowWhiteSVG from
    './../../../../../Dist/Content/RightPanel/ContentHead/arrowWhite.svg'
import s from './URLIndication.module.css'
import { useHistory } from 'react-router-dom'

const URLIndication = () => {
    const history = useHistory()

    const timeTravel = () => {
        history.goBack()
    }

    return (
        <div className={s.wrapper}>
            <BackButton
                backgroundImage={ArrowSVG}
                bgImageHover={ArrowWhiteSVG}
                onClick={timeTravel}
            />
            <CurrLink/>
        </div>
    )
}

export default URLIndication
