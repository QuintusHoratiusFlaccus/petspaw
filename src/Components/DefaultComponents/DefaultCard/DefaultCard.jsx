import { StyledCard } from './StyledCard.js'

const DefaultCard = ({ ComponentAction, ...props }) => {
    return (
        <StyledCard
            {...props}
        >
            {
                ComponentAction ?
                    <ComponentAction
                        id={props.value}
                        image_id={props.id}
                        url={props.bgImage}
                        text={props.text}
                    />
                    : null

            }
        </StyledCard>
    )
}

export default DefaultCard
