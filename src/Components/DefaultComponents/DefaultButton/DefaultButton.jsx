import { StyledButton } from './StyledButton.js'

const DefaultButton = ({ children, ...props }) => {
    return <StyledButton
        {...props}
    >
        {children}
    </StyledButton>
}

export default DefaultButton
