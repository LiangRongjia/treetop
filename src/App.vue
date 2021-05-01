<template>
  <div id="app">
    <login-page v-if="!loggedIn" @login="login"></login-page>
    <home-menu
      v-if="loggedIn"
      class="home__menu customScrollBar"
      :userID="userID"
      :userName="userName"
      :projects="projects">
    </home-menu>
    <div class="home__page" v-if="loggedIn">
      <my-info-page v-if="activePage==='my-info'"></my-info-page>
      <my-jobs-page v-if="activePage==='my-jobs'"></my-jobs-page>
      <new-project-page v-if="activePage==='new-project'"></new-project-page>
      <project-page v-if="activePage==='project-page'" :project="activeProject"></project-page>
    </div>
  </div>
</template>

<script>

import LoginPage from './LoginPage'
import HomeMenu from './HomeMenu'
import MyInfoPage from './MyInfoPage'
import MyJobsPage from './MyJobsPage'
import NewProjectPage from './NewProjectPage'
import ProjectPage from './ProjectPage'

export default {
  name: 'App',
  components: {
    'login-page': LoginPage,
    'home-menu': HomeMenu,
    'my-info-page': MyInfoPage,
    'my-jobs-page': MyJobsPage,
    'new-project-page': NewProjectPage,
    'project-page': ProjectPage
  },
  computed: {
    activeProject: function () {
      return this.projects.filter(item => item.ID === this.activeProjectID)[0] || {}
    }
  },
  data: function () {
    return {
      // 视图控制
      loggedIn: false,
      pages: [ 'my-info', 'my-jobs', 'new-project', 'project-page' ],
      activePage: 'my-jobs',
      // 数据
      userID: 0,
      userName: 'liangrongjia',
      password: '',
      projects: [],
      activeProjectID: -1
    }
  },
  methods: {
    login: async function (userName, password) {
      const loginResp = await this.APIs.login(userName, password)
      if (loginResp.data.message === '成功') {
        this.loggedIn = true
        // 获取数据
        const projResp = await this.APIs.getProjectsByUserID()
        this.projects = projResp.data.data.projects || []
      }
    }
  },
  mounted: function () {
    // 等待事件总线挂载及注册
    setTimeout(() => {
      // 监听数据变更事件
      this.$bus.$on('toPage', (pageName) => {
        this.activePage = pageName
      })
      this.$bus.$on('toProject', (projectID) => {
        this.activePage = 'project-page'
        this.activeProjectID = projectID
      })
      this.$bus.$on('updateSprintInfo', (sprintID, sprintInfo) => { })
      this.$bus.$on('deleteSprint', (sprintID) => {})
      this.$bus.$on('createSprint', (title, startDate, endDate, description) => {})
      this.$bus.$on('', () => {})
      this.$bus.$on('', () => {})
      this.$bus.$on('', () => {})
      this.$bus.$on('', () => {})
      this.$bus.$on('', () => {})
    })
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
#app{
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
  overflow: auto;
}
.home__page{
  grid-column-start: 6;
  grid-column-end: 25;
  grid-row-start: 1;
  grid-row-end: 2;
  overflow: auto;
}
</style>
