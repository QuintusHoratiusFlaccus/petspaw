import { StyledButton } from './StyledButton.js'

const DefaultButton = ({ children, onClick, ...props }) => {
    return <StyledButton
        {...props}
        onClick={onClick}
    >
        {children}
    </StyledButton>
}

export default DefaultButton
