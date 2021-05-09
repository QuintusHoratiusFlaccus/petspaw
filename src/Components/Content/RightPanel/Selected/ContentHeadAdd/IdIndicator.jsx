import s from './IdIndicator.module.css'
import { withContentHead } from '../../../../HOC/main'

const IdIndicator = ({ id }) => {
    return (
        <span className={s.dogId}>
            {id}
        </span>
    ) 
}

export default withContentHead(IdIndicator)(true)
