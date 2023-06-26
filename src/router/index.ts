import { getCache } from '@/utils/cache';
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
        component: () => import('../views/Home/HomePage.vue'),
        meta: {
          breadcrumb: ['首页', '首页']
        }
      },
      {
        path: '/article',
        name: 'article', // 文章管理
        component: () => import('../views/ArticleManage/ArticleManage.vue'),
        meta: {
          breadcrumb: ['文章管理', '文章管理']
        },
        children: [
          {
            path: 'edit/:id',
            name: 'articleEdit', // 文章编辑管理(新建/更新)
            component: () =>
              import('../views/ArticleManage/views/EditArticle.vue')
          }
        ]
      },

      {
        path: '/category',
        name: 'category', // 分类管理
        component: () => import('../views/CategoryManage/CategoryManage.vue'),
        meta: {
          breadcrumb: ['分类管理', '分类管理']
        }
      },
      {
        path: '/tag',
        name: 'tag', // 标签管理
        component: () => import('../views/TagManage/TagManage.vue'),
        meta: {
          breadcrumb: ['标签管理', '标签管理']
        },
        children: [
          {
            path: 'tagDetail/:id',
            name: 'tagDetail',
            component: () => import('../views/TagManage/views/TagDetail.vue')
          }
        ]
      },
      {
        path: '/picture',
        name: 'picture', // 图片管理
        component: () => import('../views/PictureManage/PictureManage.vue'),
        meta: {
          breadcrumb: ['图片管理', '图片管理']
        }
      },
      {
        path: '/setting',
        name: 'setting', // 系统设置
        children: [
          {
            path: 'friendChain',
            name: 'friendChain', // 友链管理
            component: () => import('../views/SystemSetting/FriendChain.vue'),
            meta: {
              breadcrumb: ['系统设置', '友链管理']
            }
          },
          {
            path: 'user',
            name: 'userManage', // 用户管理
            component: () => import('../views/SystemSetting/UserManage.vue'),
            meta: {
              breadcrumb: ['系统设置', '用户管理']
            }
          }
        ]
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
/**
 * 全局前置守卫(页面权限)
 */
router.beforeEach((to) => {
  // 如果去往的下一个页面不是登录页，则需要登录后才能访问(拥有token)
  if (to.path !== '/login') {
    if (!getCache('bms-token')) {
      return '/login';
    }
  }
});

export default router;
