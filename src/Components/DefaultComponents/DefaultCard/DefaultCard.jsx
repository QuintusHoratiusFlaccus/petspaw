import { StyledCard } from './StyledCard.js'

const DefaultCard = ({ ComponentAction, ...props }) => {
    return (
        <StyledCard
            {...props}
        >
            <ComponentAction
                value={props.value}
                id={props.id}
                text={props.text}
            />
        </StyledCard>
    )
}

export default DefaultCard
