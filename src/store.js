
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Cities from './reducers'

export default createStore(Cities, applyMiddleware(thunk))
