import request from '../utils/request'

export function getClassifyList() {
    return request({
        url: '/classify',
        method: 'get'
    })
}