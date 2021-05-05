import { VOTE_ACTIONS } from '../Constants/Constants'

const getDate = () => {
    const date = new Date()
    return date.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute:'2-digit'
    })
}

const createAction = (data) => {
    return {
        time: getDate(),
        imgId: data.id,
        event: data.action,
    }
}

export function votesReducer(state = {}, action) {
    switch (action.type) {
        case VOTE_ACTIONS:
            return createAction(action.payload)
        default:
            return state
    }
}
