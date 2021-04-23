import {combineReducers, applyMiddleware, createStore} from 'redux'
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk'

const allReducers = combineReducers({

})

const store = createStore(
  allReducers
)

export default store
