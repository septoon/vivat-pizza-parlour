import { combineReducers, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { reducer as formReducer } from 'redux-form'
import catalogReducer from './catalog-reducer'
import teaCardReducer from './teaCard-reducer'

let reducers = combineReducers({
    catalogPage: catalogReducer,
    teaCardPage: teaCardReducer
})

export const store = createStore(reducers) // applyMiddleware for thunk

window.store = store

// export default store