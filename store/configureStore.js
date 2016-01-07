import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'

//中间件
import thunk from 'redux-thunk' //异步中间件
import createLogger from 'redux-logger'
import api from '../middleware/api'

export default function configureStore() {
    /* logger */
    const loggerMiddleware = createLogger()

    /* applyMiddleware */
    const createStoreWithMiddleware = applyMiddleware(
        thunk,
        loggerMiddleware,
        api
    )(createStore)

    const store = createStoreWithMiddleware(reducer);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
          const nextReducer = require('../reducers')
          store.replaceReducer(nextReducer)
        })
    }
    return store
}
