import { log } from "@/utils/log/web_log";
import { useStorage } from "@/utils/storage/index";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";


// NOTE: 路由设置
const routes: Array<RouteRecordRaw> = [
  {
    name: 'base',
    path: '/',
    meta: {
      title: "首页"
    },
    component: () => import("@/views/Base.vue"),
    children: [

    ]
  },
  {
    name: 'ApiView',
    path: '/api/docs',
    component: () => import('@/views/ApiPage.vue'),
    meta: {
      title: "内容"
    },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import("@/views/Login.vue"),
    meta: {
      title: "登陆页^_^"
    }
  },
  {
    name: 'DashBoardView',
    path: '/dashboard',
    redirect: '/dashboard/home',
    component: () => import("@/views/dashboard/index.vue"),
    children: [
      {
        name: 'DashBoardHomeView',
        path: 'home',
        component: () => import("@/views/dashboard/home/Home.vue"),
        meta: {
          title: "控制台"
        },
      },
      {
        name: 'UserView',
        path: 'user',
        component: () => import("@/views/dashboard/user/User.vue"),
        meta: {
          title: "用户界面"
        },
      },
      {
        name: 'FilebrowerView',
        path: 'filebrower',
        component: () => import("@/views/dashboard/file/File.vue"),
        meta: {
          title: "文件管理"
        },
      },
      {
        name: 'ConponentsView',
        path: 'conponents',
        component: () => import("@/views/Components.vue"),
        meta: {
          title: "组件展示"
        },
        children: [
          {
            name: 'DemoCardView',
            path: 'demoCard',
            component: () => import("@/components/DemoCard.vue"),
            meta: {
              title: "示例卡片"
            },
          },
        ]
      },
      {
        name: "ApplicationView",
        path: 'applications',
        component: () => import("@/views/dashboard/application/Application.vue"),
        meta: {
          title: "应用管理"
        },
      },
      {
        name: 'about',
        path: 'about',
        component: () => import("@/views/dashboard/about/Aubout.vue"),
        meta: {
          title: "关于"
        },
      },
    ]
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

const storage = useStorage()

// 导航守卫
router.beforeEach((to, from, next) => {
  // 设置标签信息
  const { meta: { title } } = to;
  document.title = title as string || '自定义名称';
  const urlPath: string = to.path.toLowerCase();
  const checkUserInfo = storage.getItem('userInfo');

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
