import { api } from '../../../Services/Api'
import { put, call } from 'redux-saga/effects'
import { fetchFavourites } from '../../Constants/Sagas/Constants'

function* addFavourites () {
    try {
        console.log('stage1')
        yield put({ type: fetchFavourites.REQUEST })
        console.log('stage2')
        const resp = yield call(api.favourites.getFavourites)
        console.log('stage3')
        yield put({ type: fetchFavourites.SUCCESS, payload: resp })
    } catch (error) {
        yield put({ type: fetchFavourites.ERROR, payload: error })
    } finally {
        yield put({ type: fetchFavourites.FULFILL })
    }
}

export default addFavourites