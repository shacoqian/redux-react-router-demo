import * as types from '../constants'

const initialState = {
  result:{}
}

function get_data(state = initialState, action) {
    if(action.type === types.SUCCESS) {
        return { result: action.result };
    }
    return state;
}

module.exports = { get_data }