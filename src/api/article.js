import request from '@/utils/request'

export function getArticleList(params) {
    return request({
        url: '/article',
        method: 'get',
        params
    })
}
export function getArticleDetail(id) {
    return request({
        url: `/article/${id}`,
        method: 'get'
    })
}
