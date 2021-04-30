import { W } from '../Constants/constants.js'
import { takeLatest } from 'redux-saga/effects'
import addNewCity from './Sagas/addNewCity.js'

function* mySaga(){
  yield takeLatest(WIDGET_WEATHER_ADD, addNewCity)
}

export default mySaga
