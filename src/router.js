import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: { align: 'middle' }
    },
    {
      path: '/loading',
      name: 'loading',
      component: Home
    },
    {
      path: '/version',
      name: 'version',
      component: function () {
        return import(/* webpackChunkName: "version" */ './views/Version.vue')
      }
    },
    {
      path: '/company',
      name: 'company',
      // route level code-splitting
      // this generates a separate chunk (company.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "company" */ './views/Company.vue')
      }
    },
    {
      path: '/leadership',
      name: 'leadership',
      // route level code-splitting
      // this generates a separate chunk (leadership.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "leadership" */ './views/Leadership.vue')
      }
    },
    {
      path: '*',
      name: 'notfound',
      props: { align: 'middle' },
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/NotFound.vue')
      }
    }
  ]
})
