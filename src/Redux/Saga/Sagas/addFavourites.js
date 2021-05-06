import { api } from '../../../Services/Api'
import { put, call } from 'redux-saga/effects'
import { fetchFavourites } from '../../Constants/Sagas/Constants'

function* addFavourites () {
    try {
        yield put({ type: fetchFavourites.REQUEST })
        const resp = yield call(api.favourites.getFavourites)
        yield put({ type: fetchFavourites.SUCCESS, payload: resp.data })
    } catch (error) {
        yield put({ type: fetchFavourites.ERROR, payload: error })
    } finally {
        yield put({ type: fetchFavourites.FULFILL })
    }
}

export default addFavourites