import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import theme from './../Reducers/theme.js'
import { modalReducer as modalState } from '../Reducers/modalReducer'
import { favouritesData } from '../Reducers/favouritesReducer'
import mySaga from '../Saga/mySaga'

const sagaMiddleware = createSagaMiddleware()

const allReducers = combineReducers({
    theme,
    modalState,
    favouritesData
})

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(mySaga)

export default store
