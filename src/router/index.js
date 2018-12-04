import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import airkiss from '@/view/airkiss'
import ScanningDevice from '@/view/ScanningDevice'
import InputData from '@/view/InputData'
import showData from '@/view/showData'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/',
      meta: {
        requireAuth : true              
      }
    },{
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path: '/home/',
          name: 'airkiss',
          component: airkiss,
          meta:{
            index:0
          }
        },{
          path: '/home/ScanningDevice',
          name: 'ScanningDevice',
          component: ScanningDevice,
          meta:{
            index:1
          }
        },{
          path: '/home/InputData',
          name: 'InputData',
          component: InputData,
          meta:{
            index:2
          }
        },{
          path: '/home/showData',
          name: 'showData',
          component: showData,
          meta:{
            index:3
          }
        },
      ]
    }
  ]
})
