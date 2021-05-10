import React from 'react'

const DefaultSelectOption = ({ setSelectedValue, setIsOpened, handleChange, textValue, value, id }) => {
    const handleClick = e => {
        if(handleChange){
            handleChange(e)
        }
        setSelectedValue(textValue)
        setIsOpened(false)
    }

    return(
        <div
            onClick={handleClick}
            className="default-select__dropdown-option"
            value={value}
            id={id}
        >
            {textValue}
        </div>
    )
}
export default DefaultSelectOption