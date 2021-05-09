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
    favouriteSuccess: (state, payload) => {
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
    favouriteAdd: (state, payload) => {
        const newState = {
            ...state,
            favouritesList: [
                ...state.favouritesList,
                payload
            ]
        }

        return newState
    },
    favouriteDelete: (state, payload) => {
        const newState = {
            ...state,
            favouritesList: state.favouritesList.filter(
                (item) => item.image_id !== payload.image_id
            )
        }

        return newState
    },
}

const reducerMap = {
    [fetchFavourites.REQUEST]: (state) => reducerFunctions.favouriteRequest(state),
    [fetchFavourites.SUCCESS]: (state, action ) => reducerFunctions.favouriteSuccess(state, action.payload ),
    [fetchFavourites.ERROR]: (state) => reducerFunctions.favouriteError(state),
    [fetchFavourites.FULFILL]: (state, error ) => reducerFunctions.favouriteFulfill(state, error ),
    [fetchFavourites.ADD]: (state, action) => reducerFunctions.favouriteAdd(state, action.payload),
    [fetchFavourites.DELETE]: (state, action) => reducerFunctions.favouriteDelete(state, action.payload),
}

export const favouritesData = createReducer(reducerMap, initialState)