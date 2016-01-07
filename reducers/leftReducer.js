const initialState = {
  number: 0
}

function active(state = initialState, action) {
    if(action.type === 'CHANGE_ACTIVE') {
        return { number: action.id };
    }
    return state;
}

module.exports = { active }