/**
 * 开发环境配置
 */

const env = import.meta.env.MODE == "development" ? 'dev' : 'prod'
const EnvConfig = {
    dev: {
        baseApi: 'http://localhost:9000/api/v1',
        mockApi: 'http://localhost:9000/api/v1',
    },
    test: {
        baseApi: '//test.demo/api',
        mockApi: 'https://mock.presstime.cn/mock/668987cbcb2f4f1158f47e0e/manager-fe',
    },
    prod: {
        baseApi: '/',
        mockApi: 'https://mock.presstime.cn/mock/668987cbcb2f4f1158f47e0e/manager-fe',
    }
}

export default {
    env,
    mock: true,
    namespace: "fromsko",
    ...EnvConfig[env]
}