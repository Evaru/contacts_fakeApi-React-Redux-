import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const middleware = composeEnhancers(
    applyMiddleware(thunk)
)
const store = createStore(rootReducer,middleware)

export default store