<template>
  <div id="app">
    <login-page v-if="!loggedIn" :login="login"/>
    <home-page v-if="loggedIn" />
    <!-- <router-view/> -->

  </div>
</template>

<script>

import LoginPage from './components/Login.vue'
import HomePage from './components/Home/Home.vue'

export default {
  name: 'App',
  components: {
    'login-page': LoginPage,
    'home-page': HomePage
  },
  data: function () {
    return {
      loggedIn: false
    }
  },
  methods: {
    login: function () {
      this.loggedIn = true
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  height: 100%;
  width: 100%;
}
*{
  margin: 0px;
  padding: 0px;
}
/* 全局，使用 .customScrollBar 类将在容器上使用风格化滚动条 */
.customScrollBar{
  overflow: overlay;
}
.customScrollBar::-webkit-scrollbar{
  width: 12px;
}
.customScrollBar::-webkit-scrollbar-thumb{
  box-shadow: inset 0 0 5px rgba(0,0,0,.2);
  background-color: #a5a5a5;
}
.customScrollBar::-webkit-scrollbar-thumb:hover{
  background-color: gray;
}
.customScrollBar::-webkit-scrollbar-track{
  box-shadow: inset 0 0 4px rgba(0,0,0,.2);
  background-color: #e5e5e5;
}
</style>
