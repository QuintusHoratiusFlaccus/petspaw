import React from 'react'
import { StyledWrapper as DescriptionWrapper } from './StyledWrapper'

const Description = (props) => {
    return (
        <DescriptionWrapper>
            <span className="description_name">
                {props.name}
            </span>
            <span className="description_characteristic">
                {props.bred_for}
            </span>
            <div className="description_temperament">
                <span>Temperament</span>
                <span
                    className="description_data"
                >
                    {props.temperament}
                </span>
            </div>
            <div className="description_height">
                <span>Height:</span>
                <span
                    className="description_data"
                >
                    {props.height.metric} at the withers
                </span>
            </div>
            <div className="description_weight">
                <span>Weight:</span>
                <span
                    className="description_data"
                >
                    {props.weight.metric} kgs
                </span>
            </div>
            <div className="description_lifeSpan">
                <span>Life span:</span>
                <span
                    className="description_data"
                >
                    {props.life_span}
                </span>
            </div>
        </DescriptionWrapper>
    )
}

export default Description
