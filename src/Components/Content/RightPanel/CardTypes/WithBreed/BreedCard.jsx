import { StyledCard } from './StyledCard.js'
import { useHistory } from 'react-router-dom'

const BreedCard = (props) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/breeds/selected?id=${props.value}`)
    }

    return (
        <StyledCard
            {...props}
            onClick={handleClick}
        >
            <div className="hoverContent_action">
                {props.text}
            </div>
        </StyledCard>
    )
}

export default BreedCard
