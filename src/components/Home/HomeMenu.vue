<template>
  <aside>
    <div class="user-info">
      <div>
        <el-avatar :src="avatarURL"></el-avatar>
        <p class="user-info__name">{{userName}}</p>
      </div>
    </div>
    <el-menu ref="home-menu" class="menu" default-active="my-jobs" :default-openeds="['myJob', 'myProjects']">
      <el-menu-item index="my-info" @click="toPage('my-info')">
        <span>我的资料</span>
      </el-menu-item>
      <el-menu-item index="my-jobs" @click="toPage('my-jobs')">
        <span>我的工作</span>
      </el-menu-item>
      <el-submenu ref="project-menu" index="myProjects">
        <template slot="title">
          <span>我的项目</span>
        </template>
        <el-menu-item v-for="(item, index) in projects"
          :index="index"
          @click="toProject(item)"
          :key="item.ID"
        >
          {{item.name}}
        </el-menu-item>
      </el-submenu>
      <el-menu-item :index="'newProject'" @click="toPage('new-project')" :key="'new-project'">
        + 创建项目
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<script>
/* 本组件 HomeMenu 为主页导航组件，从登录页面 Login 组件转入，此后一直驻留
   * 【输入参数 props】
   * userID
   * 【对外功能】
   * 本组件需要与页面显示 route-view 传参
   * 但 route-view 无法使用父子组件传参方法
   * 故本组件需要维护全局变量，使用全局变量传参
   *  1. 维护全局变量 this._GLOBAL.projectID（以支持 project 组件）
   *  2. 维护路径 this.$route.params.projectName（以支持 project 组件）
   *  3. （暂无）维护路径参数 this.$route.query?
   */
export default {
  name: 'HomeMenu',
  props: [
    'userID',
    'userName',
    'toPage',
    'projects',
    'toProject'
  ],
  data: function () {
    return {
      avatarURL: this._GLOBAL.imgBaseUrl + this._GLOBAL.userObj.avatar
    }
  },
  created: function () {
    this.acceptList()
  },
  mounted: function () {
    console.log(this.projects)
  },
  methods: {
    acceptList: function () {
      this.$eventBus.$on('add', (message) => {
        this.projectsList = this._GLOBAL.ProjectList
      })
    }
  }
}
</script>

<style scoped>
  .user-info {
    padding: 24px;
    display: flex;
    flex-direction: column;
  }

  .user-info>div {
    display: flex;
    align-items: center;
  }

  .user-info__name {
    margin-left: 24px;
  }

  .menu {
    border: none;
  }
</style>
