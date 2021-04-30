<template>
  <div class="app__home">
    <home-menu
      class="home__menu customScrollBar"
      :userID="userID"
      :userName="userName"
      :toPage="toPage"
      :toProject="toProject"
      :projects="projects"
    />
    <my-info v-if="activePage==='my-info'"></my-info>
    <my-jobs v-if="activePage==='my-jobs'"></my-jobs>
    <new-project v-if="activePage==='new-project'"></new-project>
    <project-page
      v-if="activePage==='project-page'"
      :project="projects.filter(item=>item.ID===activeProjectID)[0]"
    >
    </project-page>
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
  mounted: function () {
    this.APIs.getProjectsByUserID().then((response) => {
      this.projects = response.data.data.prjList
      console.log(this.projects)
    })
  },
  methods: {
    toPage: function (pageName) {
      this.activePage = pageName
    },
    toProject: function (projectID) {
      this.activePage = 'project-page'
      this.activeProjectID = projectID
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
    overflow: auto;
  }
  .home__main{
    grid-column-start: 6;
    grid-column-end: 25;
    grid-row-start: 1;
    grid-row-end: 2;
  }
</style>
