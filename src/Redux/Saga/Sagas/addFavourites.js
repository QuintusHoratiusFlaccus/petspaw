import { api } from '../../../Services/Api'
import { put, call } from 'redux-saga/effects'
// import { fetchFavourites } from '../../Constants/Sagas/Constants'
import { favouritesActions } from '../../Actions/getAllFavourites'

function* addFavourites () {
    try {
        //change constants into actions
        yield put(favouritesActions.REQUEST())
        const resp = yield call(api.favourites.getFavourites)
        yield put(favouritesActions.SUCCESS(resp.data))
    } catch (error) {
        yield put(favouritesActions.ERROR(error))
    } finally {
        yield put(favouritesActions.FULFILL())
    }
}

export default addFavourites