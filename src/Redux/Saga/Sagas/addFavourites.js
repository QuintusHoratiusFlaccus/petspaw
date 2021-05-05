import { api } from '../../../Services/Api'
import { put, call } from 'redux-saga/effects'
import { fetchFavourites } from '../../Constants/Sagas/Constants'

function* addFavourites (action) {
    try {
        put({ type: fetchFavourites.REQUEST })
        const resp = yield call(api.favourites.getFavourites)
        put({ type: fetchFavourites.SUCCESS, payload: resp })
    } catch (error) {
        put({ type: fetchFavourites.ERROR, payload: error })
    } finally {
        put({ type: fetchFavourites.FULFILL })
    }
}

export default addFavourites