import { VOTE_ACTIONS } from '../Constants/Constants'

export const voteActions = item => {
    return {
        type: VOTE_ACTIONS,
        payload: item
    }
}
