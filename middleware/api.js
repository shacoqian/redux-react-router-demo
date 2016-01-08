import * as types from '../constants'

export const CALL_API = Symbol('Call API')
export const POST_API = Symbol('POST API')

function getApi() {
    return fetch('/test.json')
        .then(response => response.json().then(json => ({ json, response }))
        ).then(({ json, response }) => {
            return Object.assign({},
                json
            )
        })
    }


export default store => next => action => {
    const callAPI = action[CALL_API]
    const postAPI = action[POST_API]

    //请求成功
    function nextAction(data) {
        const finalAction = Object.assign({}, data)
        return finalAction
    }

    let success = result => next(nextAction({
            result,
            type: types.SUCCESS
        }))

    let error = result => next(nextAction({
            //这里就是错误了 错误信息没什么用
            type: types.FAILED,
            result: '网络错误！请稍后重试！' || result.message
        }))

    if (typeof callAPI !== 'undefined') {
        // get
        return getApi().then(
            success,
            error
        )
    } else if (typeof postAPI !== 'undefined') {
        // post
    } else {
        return next(action)
    }
}