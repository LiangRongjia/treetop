<template>
  <div class="app__home">
    <home-menu
      class="home__menu customScrollBar"
      :userID="userID"
      :userName="userName"
      :projects="projects"
    />
    <div class="home__page">
      <my-info v-if="activePage==='my-info'"></my-info>
      <my-jobs v-if="activePage==='my-jobs'"></my-jobs>
      <new-project v-if="activePage==='new-project'"></new-project>
      <project-page
        v-if="activePage==='project-page'"
        :project="activeProject">
      </project-page>
    </div>
  </div>
</template>

<script>

import HomeMenu from './HomeMenu.vue'
import MyInfoPage from './MyInfo/MyInfo.vue'
import MyJobsPage from './MyJobs/MyJobs.vue'
import NewProjectPage from './NewProject/NewProject.vue'
import ProjectPage from './Project/Project.vue'

export default {
  components: {
    'home-menu': HomeMenu,
    'my-info': MyInfoPage,
    'my-jobs': MyJobsPage,
    'new-project': NewProjectPage,
    'project-page': ProjectPage
  },
  computed: {
    activeProject: function () {
      return this.projects.filter(item => item.ID === this.activeProjectID)[0] || {}
    }
  },
  data: function () {
    return {
      userID: this._GLOBAL.userObj.ID,
      userName: this._GLOBAL.userObj.name,
      pages: [
        'my-info',
        'my-jobs',
        'new-project',
        'project-page'
      ],
      activePage: 'my-jobs',
      activeProjectID: -1,
      projects: []
    }
  },
  methods: {
    updateSprintInfo: function (sprintID, sprintInfo) {
      this.projects.forEach(project => {
        project.sprints.forEach((sprint) => {
          if (sprint.ID === sprintID) {
            sprint.Info = sprintInfo
          }
        })
      })
    }
  },
  mounted: function () {
    // 获取全局数据
    this.APIs.getProjectsByUserID().then(response => {
      this.projects = response.data.data.projects || []
    })
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
