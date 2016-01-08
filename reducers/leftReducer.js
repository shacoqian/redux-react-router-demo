import * as types from '../constants'

const initialState = {
  number: 0
}

function active(state = initialState, action) {
    if(action.type === types.CHANGE_ACTIVE) {
        return { number: action.id };
    }
    return state;
}

module.exports = { active }