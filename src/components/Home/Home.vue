<template>
  <div class="app__home">
    <home-menu class="home__menu" :userID="userID"/>
    <router-view class="home__main customScrollBar"></router-view>
  </div>
</template>

<script>
import HomeMenu from './HomeMenu.vue'
export default {
  name: 'Home',
  components: {
    'home-menu': HomeMenu
  },
  data () {
    return {
      // userID 依赖于全局变量
      userID: this._GLOBAL.userID
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
  .app__home{
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: 1fr;
  }
  .home__menu{
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;
    display: flex;
    flex-direction: column;
    border-right: rgba(0,0,0,0.1) solid 1px;
  }
  .home__main{
    grid-column-start: 6;
    grid-column-end: 25;
    grid-row-start: 1;
    grid-row-end: 2;
  }
</style>
