import { fetchFavourites } from '../Constants/Sagas/Constants'
import { createReducer } from './createReducer/createReducer'

const initialState = { error: null, isLoading: false, favouritesList: [] }

const reducerFunctions = {
    favouriteRequest: (state) => {
        const newState = {
            ...state,
            isLoading: true,
        }

        return newState
    },
    favouriteSuccess: (state, { payload }) => {
        const newState = {
            ...state,
            isLoading: false,
            favouritesList: payload
        }

        return newState
    },
    favouriteError: (state, { error }) => {
        const newState = {
            ...state,
            isLoading: false,
            error: error
        }

        return newState
    },
    favouriteFulfill: (state) => {
        const newState = {
            ...state,
            isLoading: false,
        }

        return newState
    },
}

const reducerMap = {
    [fetchFavourites.REQUEST]: (state) => reducerFunctions.favouriteRequest(state),
    [fetchFavourites.SUCCESS]: (state, { payload }) => reducerFunctions.favouriteRequest(state, { payload }),
    [fetchFavourites.ERROR]: (state) => reducerFunctions.favouriteRequest(state),
    [fetchFavourites.FULFILL]: (state, { error }) => reducerFunctions.favouriteRequest(state, { error }),
}

export const favouritesData = createReducer(reducerMap, initialState)