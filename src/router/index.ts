import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/Login/LoginView.vue';
import NotFound from '../views/NotFound/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    component: () => import('../views/Home/HomeView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/Home/HomePage.vue')
      },
      {
        path: '/article',
        name: 'article', // 文章管理
        component: () => import('../views/ArticleManage/ArticleManage.vue')
      },
      {
        path: '/category',
        name: 'category', // 分类管理
        component: () => import('../views/CategoryManage/CategoryManage.vue')
      },
      {
        path: '/tag',
        name: 'tag', // 标签管理
        component: () => import('../views/TagManage/TagManage.vue')
      },
      {
        path: '/picture',
        name: 'picture', // 图片管理
        component: () => import('../views/PictureManage/PictureManage.vue')
      },
      {
        path: '/setting',
        name: 'setting', // 系统设置
        component: () => import('../views/SystemSetting/SystemSetting.vue')
      },
      // 404NotFound页面
      { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
