/**
 * api 管理
 */

import request from "@/utils/request"

export default {
    login(params: any) {
        return request({
            url: '/user/login',
            method: 'post',
            data: params
        })
    }
}