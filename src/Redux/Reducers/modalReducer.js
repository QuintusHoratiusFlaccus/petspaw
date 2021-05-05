import { MODAL_ACTION } from '../Constants/Constants'

export function modalReducer(state = false, action) {
    switch (action.type) {
        case MODAL_ACTION:
            return action.payload
        default:
            return state
    }
}
