import LeftReducer from './leftReducer'
import FetchReducer from './fetchReducer'
import { combineReducers } from 'redux'
import { syncReduxAndRouter, routeReducer  } from 'redux-simple-router'

//将不同的reducer合并
let RootReducer = Object.assign(
    LeftReducer, 
    FetchReducer 
)

const reducer = combineReducers(Object.assign({}, RootReducer, {
    routing: routeReducer
}));


module.exports = reducer ;
