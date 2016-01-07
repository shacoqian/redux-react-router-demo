export const CALL_API = Symbol('Call API')

// const API_ROOT = 'https://api.github.com

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
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    //请求成功
    function nextAction(data) {
        const finalAction = Object.assign({}, data)
        return finalAction
    }

    return getApi().then(
        result => next(nextAction({
            result,
            type: 'success'
        })),
        error => next(nextAction({
            //这里就是错误了 错误信息没什么用
            type: 'error',
            error: '网络错误！请稍后重试！' || error.message
        }))
    )

}