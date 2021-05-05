import ButtonsSet from './JudgementButtons/ButtonsSet.jsx'
import s from './LawCourt.module.css'

const LawCourt = ({ voteEvent, image, id, isFav, favClick }) => {
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
                isFav={isFav}
                favClick={favClick}
            />
        </div>
    )
}

export default LawCourt
