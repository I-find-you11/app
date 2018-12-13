//配置引入
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store'
/* ------ */

//页面引入
import home from '@/view/home'                               
import airkiss from '@/view/airkiss'                         
import ScanningDevice from '@/view/ScanningDevice'           
import InputData from '@/view/InputData'
import showData from '@/view/showData'
//import login from '@/view/login'                     //登陆路由  暂时不需要
import cs from '@/view/cs'
//import PersonalCenter from '@/view/PersonalCenter'   //个人中心路由 暂时不需要


Vue.use(Router)

/*
**     路由参数说明:
**         index:  表示主页面导航索引的索引。home页面会实时找到路由的index数值然后赋值给导航响应参数来高亮当前导航
**         requireAuth:  表示当前路由是否需要登陆再能跳转    //登陆暂时取消
*/

//主页面下路由
const homeChild = [
  {
    path: '/home/',
    name: 'airkiss',
    component: airkiss,
    meta:{
      index:0,
      requireAuth : true              
    }
  },{
    path: '/home/ScanningDevice',
    name: 'ScanningDevice',
    component: ScanningDevice,
    meta:{
      index:1,
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
  }
]


const router =  new Router({
  routes: [
    {
      path: '/cs',
      name:'cs',
      component: cs,
      meta:{
        requireAuth : true              
      }
    },
    {
      path: '/',
      redirect: '/home/',
    },{
      path: '/home',
      name: 'home',
      component: home,
      children: homeChild
    }
  ]
})


// 登陆权限 --》 目前app是局域网链接   所以不需要登陆
// router.beforeEach((to, from, next) => {
//   if (!to.meta.requireAuth) {                                           //判断该路由是否需要验证登录
//       if (store.state.isLogin) {                             // 通过vuex state获取当前的token是否存在 如果存在 继续执行路由跳转
//         next();
//       }else {                                                          //如果不存在token 路由链接到登陆页面
//         next({
//           path: '/login',
//           query: {redirect: to.fullPath}                               //将即将跳转的路由path作为参数，登录成功后跳转到该路由
//         })
//       }
//   }
//   else {
//     next();
//   }
// })

export default router
