<template>
  <div class="app__home">
    <el-divider></el-divider>
    <aside class="home__aside">
      <div class="home__user-info">
        <div>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
          <p class="user-info__name">{{userName}}</p>
        </div>
      </div>
      <el-menu ref="home-menu" class="home__menu" :default-active="projects[0].path"
        :default-openeds="['myJob', 'myProjects']">
        <el-submenu index="myJob">
          <template slot="title">
            MY JOB
          </template>
          <el-menu-item v-for="item in myJobs"
            :index="item.path"
            @click="toMyJob(item.path)"
            :key="item.path">
            {{item.text}}
          </el-menu-item>
        </el-submenu>
        <el-submenu index="myProjects">
          <template slot="title">
            MY PROJECTS
          </template>
          <el-menu-item v-for="item in projects"
            :index="item.path"
            @click="toProject(item.path)"
            :key="item.path">
            {{item.text}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </aside>
    <el-main class="home_main">
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      myJobs: [
        { text: 'My Task', path: 'my-task' },
        { text: 'My Message', path: 'my-message' }
      ],
      projects: [
        { text: 'project 1', path: 'project-1' },
        { text: 'project 2', path: 'project-2' },
        { text: 'project 3', path: 'project-3' }
      ]
    }
  },
  computed: {
    // user 来源于路径
    userName: function () {
      return this.$route.params.userName
    },
    project: function () {
      return this.$route.params.project
    }
  },
  watch: {
    project (to, from) {
      this.$refs['home-menu']['activeIndex'] = to
    }
    // 这里要监听路径变化集中管理路径，不由下属页面组件控制
  },
  mounted () {
    if (this.projects.length !== 0) {
      this.$router.replace('/' + this.userName + '/' + this.projects[0].path)
    }
  },
  methods: {
    // 进入某项目页面
    toProject (path) {
      this.$router.push('/' + this.userName + '/' + path)
    },
    // 进入某工作页面
    toMyJob (path) {
      this.$router.push('/' + this.userName + '/' + path)
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
  .home__aside{
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;
    display: flex;
    flex-direction: column;
    border-right: rgba(0,0,0,0.1) solid 1px;
  }
  .home__user-info{
    padding: 24px;
    display: flex;
    flex-direction: column;
  }
  .home__user-info>div{
    display: flex;
    align-items: center;
  }
  .user-info__name{
    margin-left: 24px;
  }
  .home__menu{
    border: none;
  }
  .home_main{
    grid-column-start: 6;
    grid-column-end: 25;
    grid-row-start: 1;
    grid-row-end: 2;
  }
</style>
