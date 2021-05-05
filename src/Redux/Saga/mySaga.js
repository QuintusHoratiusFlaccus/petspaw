import { takeLatest } from 'redux-saga/effects'
import { FETCH_FAVOURITES } from '../Constants/Sagas/Constants'
import addFavourites from './Sagas/addFavourites'

function* mySaga(){
    yield takeLatest(FETCH_FAVOURITES, addFavourites)
}

export default mySaga
