import { CALL_API } from '../middleware/api'

const GET_LISTS = 'GET_LISTS'
//const GET_404 = 'GET_404'

function getLists() {
    return {
        [CALL_API]: {
            type:GET_LISTS
        }
    }
}


module.exports = { getLists }