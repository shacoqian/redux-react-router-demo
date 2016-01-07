const initialState = {
  result:{}
}

function get_data(state = initialState, action) {
    if(action.type === 'success') {
        return { result: action.result };
    }
    return state;
}

module.exports = { get_data }