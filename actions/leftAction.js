const CHANGE_ACTIVE = 'CHANGE_ACTIVE'

function changeActive(n) {
    return {
        type: CHANGE_ACTIVE,
        id: n
    }
}

module.exports = { changeActive };
