import React, { useState } from 'react'
import { StyledSelect } from './StyledSelect'
import { ReactComponent as ArrowDownSVG } from './../../../Dist/Content/RightPanel/DefaultComponents/arrowDown.svg'

const DefaultSelect = ({ width, children, initialValue, handleChange, ...props }) => {
    const [selectedValue, setSelectedValue] = useState('')
    const [isOpened, setIsOpened] = useState(false)

    const optionList = () => children.flat().map(el => React.cloneElement(el, { setSelectedValue, setIsOpened, handleChange }))

    const handleOpen = () => setIsOpened(!isOpened)
    return(
        <StyledSelect
            width={width}
            {...props}
        >
            <ArrowDownSVG/>
            <div className="default-select__selected" onClick={handleOpen}>
                {selectedValue || initialValue}
            </div>
            {
                isOpened
                    &&
                <div className="default-select__dropdown">
                    {optionList()}
                </div>
            }
        </StyledSelect>
    )
}

export default DefaultSelect