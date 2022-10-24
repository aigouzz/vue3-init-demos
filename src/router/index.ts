import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/page/comment',
    children: [
      {
        path: '/page',
        name: 'page',
        redirect: '/page/comment',
        component: () => import('../components/Page.vue'),
        children: [
          {
            path: 'comment',
            name: 'comment',
            component: () => import('../components/comment.vue')
          },
          {
            path: 'chat',
            name: 'chat',
            component: () => import('../components/chat.vue')
          },
          {
            path: 'search',
            name: 'search',
            component: () => import('../components/search.vue')
          },
          {
            path: 'noticeBar',
            name: 'noticeBar',
            component: () => import('../components/notice-bar.vue')
          },
          {
            path: 'anchor',
            name: 'anchor',
            component: () => import('../components/anchor.vue')
          },
          {
            path: 'editor',
            name: 'editor',
            component: () => import('../components/editor.vue')
          },
          {
            path: 'icon',
            name: 'icon',
            component: () => import('../components/icon.vue')
          },
          {
            path: 'tags',
            name: 'tags',
            component: () => import('../components/tags.vue')
          },
          {
            path: 'dialog',
            name: 'dialog',
            component: () => import('../components/dialog.vue')
          },
          {
            path: 'test',
            name: 'test',
            component: () => import('../components/test.vue')
          },
          {
            path: 'sign',
            name: 'sign',
            component: () => import('../components/sign.vue')
          },
          {
            path: 'modal',
            name: 'modal',
            component: () => import('../components/modal.vue')
          },
        ],
      }
    ]
  },
  {
    path: '/my',
    name: 'my',
    // route level code-splitting
    // this generates a separate chunk (my.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "my" */ '../views/MyView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
