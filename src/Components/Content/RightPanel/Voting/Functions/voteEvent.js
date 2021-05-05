import { useEffect, useState } from 'react'
import { api } from './../../../../../Services/Api.js'

export const voteEvent = (image_id) => async (e) => {
    const value = e.target.id
    const reqBody = { image_id, value }

    try {
        await api.votes.postVote(reqBody)
    } catch (e) {
        console.log('Error' + e)
    }
}
