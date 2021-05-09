// import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { StyledSelect } from './StyledSelect.js'

const DefaultSelect = ({ base, children, placeholder, ...props }) => {
    const createOptions = () => {
        if (!base) return
        return base.map((el) => (
            <option
                key={`${el.name}_key`}
                value={el.id}
                id={props.id}
            >
                {el.name}
            </option>
        ))
    }

    return (
        <StyledSelect {...props}>
            {
                children ||
                (
                    <option value="" disabled selected hidden>
                        {placeholder}
                    </option>
                )
            }
            {createOptions()}
        </StyledSelect>
    )

}

export default DefaultSelect
