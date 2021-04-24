import {combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';

import theme from './../Reducers/theme.js'

const allReducers = combineReducers({
  theme,
})

const store = createStore(
  allReducers,
  composeWithDevTools()
)

export default store
