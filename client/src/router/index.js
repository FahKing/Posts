import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/posts',
      name: 'posts',
      component: () => import('@/components/Posts.vue')
    },
    {
      path: '/posts/add',
      name: 'addpost',
      component: () => import('@/components/AddPost.vue')
    },
    {
      path: '/posts/:id/edit',
      name: 'editpost',
      component: () => import('@/components/EditPost.vue')
    }
  ]
})
