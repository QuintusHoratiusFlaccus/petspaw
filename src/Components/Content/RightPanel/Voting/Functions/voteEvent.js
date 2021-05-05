import { api } from './../../../../../Services/Api.js'
import { voteActions } from '../../../../../Redux/Actions/voteActions'

export const voteEvent = (image_id, dispatch) => async (e) => {
    const value = e.target.value

    try {
        await api.votes.postVote({ image_id, value })

        dispatch(voteActions({
            id: image_id,
            action: value ? 'ADD_LIKE' : 'ADD_DISLIKE'
        }))
    } catch (e) {
        console.log('Error' + e)
    }
}
