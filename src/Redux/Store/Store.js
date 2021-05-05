import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import theme from './../Reducers/theme.js'
import { modalReducer } from '../Reducers/modalReducer'
import { favouritesData } from '../Reducers/favouritesReducer'
import mySaga from '../Saga/mySaga'
import { votesReducer } from '../Reducers/votesReducer'

const sagaMiddleware = createSagaMiddleware()

const allReducers = combineReducers({
    theme,
    modalReducer,
    favouritesData,
    votesReducer,
})

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(mySaga)

export default store
