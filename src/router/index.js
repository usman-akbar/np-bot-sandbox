import Vue from 'vue'
import Router from 'vue-router'
import demoBot from '@/components/demo/demoBot'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demoBot',
      component: demoBot
    }
  ]
})
