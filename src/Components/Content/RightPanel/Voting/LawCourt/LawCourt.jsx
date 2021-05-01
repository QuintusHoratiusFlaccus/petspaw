import ButtonsSet from './JudgementButtons/ButtonsSet.jsx'
import s from './LawCourt.module.css'

const LawCourt = ({voteEvent, image, id, ...props}) => {
    return (
        <div className={s.lawCourt}>
            <img
                className={s.lawCourt_image}
                src={image}
                alt="suspect"
            />
            <ButtonsSet
                voteEvent={voteEvent}
                image_id={id}
            />
        </div>
    )
}

export default LawCourt
