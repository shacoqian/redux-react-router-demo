import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router} from 'react-router'

import { syncReduxAndRouter } from 'redux-simple-router'
import  createBrowserHistory  from 'history/lib/createBrowserHistory'

import getRouters from './routers'
import configureStore from './store/configureStore'

let store = configureStore();
let history = createBrowserHistory();
syncReduxAndRouter(history, store);

render (
    <Provider store={store}>
        <div>
            <Router history={history}>
                {getRouters()}
            </Router>
        </div>
    </Provider>,
    document.getElementById('main')
)
