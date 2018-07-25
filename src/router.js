import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import detail from '@/components/detail/detail'
import personal from '@/components/personal/personal'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    }

  ]
})
