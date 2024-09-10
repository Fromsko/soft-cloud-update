// index.js - router
import About from "@/views/About.vue"
import ApiPage from '@/views/ApiPage.vue'
import Base from "@/views/Base.vue"
import Home from "@/views/Home.vue"
import Login from "@/views/Login.vue"
import Welcome from "@/views/Welcome.vue"
import useColorLogOutPut from "@/utils/color_log"
import storage from "@/utils/storage"
import { createRouter, createWebHashHistory } from "vue-router"


const log = useColorLogOutPut()

const routes = [
    {
        name: 'home',
        path: '/',
        meta: {
            title: "首页"
        },
        component: Base,
    },
    {
        path: '/api/docs',
        name: 'Api',
        component: ApiPage,
        props: ((route) => {
            return route.params
        }),
        meta: {
            title: "内容"
        },
    },
    {
        name: 'Login',
        path: '/Login',
        component: Login,
        meta: {
            title: "登陆页^_^"
        }
    },
    {
        name: 'Welcome',
        path: '/Welcome',
        component: Welcome,
        meta: {
            title: "欢迎页"
        }
    },
    {
        name: 'demo',
        path: '/demo',
        meta: {
            title: "首页"
        },
        component: Home,
        children: [
            {
                name: 'About',
                path: '/About',
                component: About,
                meta: {
                    title: "关于"
                },
            }
        ],
    },
]

// router 对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//导航守卫
router.beforeEach((to, from, next) => {
    // 设置标签信息
    const { meta: { title } } = to
    document.title = title || '自定义名称'

    // 判断是否在 (注册|登录)
    if (to.path == '/Login') return next()
    if (to.path == '/register') return next()
    const tokenStr = storage.getItem('token')
    if (!tokenStr) return next('/Login')
    next()
})

// 全局解析守
router.beforeResolve((to, from, next) => {
    log.info('我是全局解析守卫')
    next()
})

// // 全局后置守卫
// router.afterEach((to, from, failure) => {
//     // console.log('全局后置守卫', to, from, failure)
//     // next()
// })
export default router