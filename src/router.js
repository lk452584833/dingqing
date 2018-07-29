import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import detail from '@/components/detail/detail'
import detail2 from '@/components/detail2/detail2'
import personal from '@/components/personal/personal'
import demo from '@/components/demo/demo'

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
      path: '/detail2',
      name: 'detail2',
      component: detail2
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
    	path:'/demo',
    	name:'demo',
    	component:demo
    }

  ]
})
