import DefaultSelect from
    './../../../../../DefaultComponents/DefaultSelect/DefaultSelect.jsx'

import { StyledWrapper } from './StyledWrapper.js'

const ParamsSelect = ({ children, width, title, ...props }) => {
    return (
        <StyledWrapper width={width}>
            <span>{title}</span>
            <DefaultSelect
                {...props}
            >
                {children}
            </DefaultSelect>
        </StyledWrapper>
    )
}


export default ParamsSelect
