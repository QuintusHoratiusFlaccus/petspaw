import { StyledCard } from './StyledCard.js'
import { useHistory } from 'react-router-dom'

const BreedCard = (props) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/breeds/selected?id=${props.id}`)
    }

    return (
        <StyledCard
            {...props}
            onClick={handleClick}
        >
            {
                props.text ? (
                    <div className="hoverContent_action">
                        {props.text}
                    </div>
                ) : null
            }
        </StyledCard>
    )
}

export default BreedCard
