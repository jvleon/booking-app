
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { Cities, Cart } from './reducers'

const rootReducer = combineReducers({ cities: Cities, cart: Cart })

export default createStore(rootReducer, applyMiddleware(thunk))
