export const createReducer = (reducerMap, initialState = null) => (state = initialState, action) => {
    let stateUpdate = state

    const reducer = reducerMap[action.type]
    if(reducer){
        stateUpdate = reducer(state, action)
    }

    return stateUpdate === state ? state : stateUpdate
}
