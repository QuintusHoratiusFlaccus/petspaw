import { createAction } from './createAction/createAction'
import { FETCH_FAVOURITES } from '../Constants/Sagas/Constants'

export const getAllFavourites = (payload) => ({
    type: FETCH_FAVOURITES,
    payload: payload
})

export const favouritesActions = createAction(FETCH_FAVOURITES)