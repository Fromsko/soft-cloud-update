/**
 * api 管理
 */

import request from "@/utils/http/request"

export default {
    async login(params: any) {
        return await request({
            url: '/user/login',
            method: 'post',
            data: params
        })
    },
    async logout(params: any) {
        return await request({
            url: '/user/logout',
            method: 'get',
        })
    }
}