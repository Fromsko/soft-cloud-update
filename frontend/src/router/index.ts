import useColorLogOutPut from "@/utils/color_log"
import storage from "@/utils/storage"
import About from "@/views/About.vue"
import ApiPage from '@/views/ApiPage.vue'
import Base from "@/views/Base.vue"
import Home from "@/views/Home.vue"
import Welcome from "@/views/Welcome.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const log = useColorLogOutPut()

// NOTE: 路由设置
const routes = [
  {
    name: 'base',
    path: '/',
    meta: {
      title: "首页"
    },
    component: Base
  },
  {
    name: 'api',
    path: '/api/docs',
    component: ApiPage,
    props: ((route: any) => {
      console.log(route.state);
      console.log(route.params);

      return { apiInfo: route.params.apiInfo }
    }),
    meta: {
      title: "内容"
    },
  },
  {
    name: 'Login',
    path: '/Login',
    // component: () => import("@/components/Login/LoginA.vue"),
    component: () => import("@/views/Login.vue"),
    meta: {
      title: "登陆页^_^"
    }
  },
  {
    name: 'home',
    path: '/home',
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
      },
      {
        name: 'Welcome',
        path: '/Welcome',
        component: Welcome,
        meta: {
          title: "欢迎页"
        },
        children: [
          {
            name: 'User',
            path: 'User',
            component: Welcome,
            meta: {
              title: "用户页面"
            },
          },
          {
            name: 'Info',
            path: 'Info',
            component: Welcome,
            meta: {
              title: "信息页面"
            },
          },
        ]
      },
    ],
  },
  {
    name: '404',
    path: '/:catchAll(.*)',
    component: () => import(`@/views/error/404.vue`)
  }
]

// router 对象
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes
})


// 导航守卫
router.beforeEach((to, from, next) => {
  // 设置标签信息
  const { meta: { title } } = to;
  document.title = title as string || '自定义名称';
  const urlPath: string = to.path.toLowerCase();
  const checkUserInfo: boolean = storage.getItem('userInfo');

  // 处理不同路由的逻辑
  switch (urlPath) {
    case '/login':
    case '/register':
      log.info("用户访问登录|注册");
      next();
      break;
    default:
      if (urlPath !== '/' && !checkUserInfo) {
        log.warning(`用户无权但是访问了:> ${urlPath}`);
        next('/login'); // 重定向到登录
      } else {
        log.success(`正常访问了: ${urlPath}`);
        next(); // 允许继续访问
      }
      break;
  }
});

// 全局后置守卫
router.afterEach((to, from, failure) => {
  // console.log('全局后置守卫', to, from, failure)
  // next()
})

// 全局解析守
router.beforeResolve((to, from, next) => {
  next()
})

export default router
