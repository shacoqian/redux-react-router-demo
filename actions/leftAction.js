import * as types from '../constants'

function changeActive(n) {
    return {
        type: types.CHANGE_ACTIVE,
        id: n
    }
}

module.exports = { changeActive };
