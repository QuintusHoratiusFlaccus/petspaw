import { FETCH_FAVOURITES } from '../Constants/Sagas/Constants'

export const getAllFavourites = (payload) => ({
    type: FETCH_FAVOURITES,
    payload: payload
})