import {combineReducers, createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import theme from './../Reducers/theme.js'

// const sagaMiddleware = createSagaMiddleware()

const allReducers = combineReducers({
  theme,
})

// const store = createStore(
//   allReducers,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// )
//
// sagaMiddleware.run(mySaga)

const store = createStore(
  allReducers,
  composeWithDevTools()
)

export default store
