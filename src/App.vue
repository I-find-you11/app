<template>
  <div id="app">
    <transition name="fade" mode='out-in'>
      <router-view ></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background: #fafafa;
}
a {
  color:inherit;
}
li{
  list-style: none;
}
/* 路由动画 */
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
