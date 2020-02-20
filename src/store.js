import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import rootreducer from './reducers/index' 

export default () => {
    return createStore(
        rootreducer,
        applyMiddleware(logger, thunkMiddleware)
    )
}