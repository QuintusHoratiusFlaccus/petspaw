import { lightTheme, darkTheme } from
    './../../theme.js'

function defaultTheme() {
    if (window.localStorage.getItem('theme') === 'light') {
        return lightTheme
    }
    return darkTheme
}

export default function theme(state = defaultTheme(), action) {
    switch (action.type) {
        case 'THEME':
            return action.payload
        default:
            return state
    }
}
