<template>
    <aside>
      <div class="user-info">
        <div>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
          <p class="user-info__name">{{userName}}</p>
        </div>
      </div>
      <el-menu ref="home-menu" class="menu" :default-active="projectsList[0].ID + ''"
        :default-openeds="['myJob', 'myProjects']">
        <el-menu-item index="my-jobs" @click="toMyJobs('my-jobs')">
          <span>MY JOBS</span>
        </el-menu-item>
        <el-submenu index="myProjects">
          <template slot="title">
            <span>MY PROJECTS</span>
          </template>
          <el-menu-item v-for="item in projectsList"
            :index="item.ID + ''"
            @click="toProject(item)"
            :key="item.ID">
            {{item.name}}
          </el-menu-item>
        </el-submenu>
				<el-menu-item
						:index="'newProject'"
						@click="toNewProject('newProject')"
						:key="'newProject'">
					  + 创建/加入项目
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
    'userID'
  ],
  data () {
    return {
      userName: 'liangrongjia',
      myJobs: [
        { text: 'My Task', path: 'my-task' },
        { text: 'My Message', path: 'my-message' }
      ],
      projectsList: [
        { ID: 1, name: 'project-1' },
        { ID: 2, name: 'project-2' },
        { ID: 3, name: 'project-3' }
      ]
    }
  },
  watch: {
    // 维护全局变量 projectID
    $route (to, from) {
      this._GLOBAL.projectID = this.$refs['home-menu']['activeIndex']
    }
  },
  mounted () {
    // 维护路径 this.$route.params.projectName
    // 首次进入主页，显示第一个项目
    if (this.projectsList.length !== 0) {
      this.$router.replace('/' + this.userName + '/' + this.projectsList[0].name)
    }
  },
  methods: {
    // 维护路径 this.$route.params.projectName
    // 进入某项目页面
    toProject (project) {
      this.$router.push('/' + this.userName + '/' + project.name)
    },
    // 进入某工作页面
    toMyJobs (path) {
      this.$router.push('/' + this.userName + '/' + path)
    },
		toNewProject (path) {
			this.$router.push('/' + this.userName + '/' + path)
		}
  }
}
</script>

<style scoped>
.user-info{
  padding: 24px;
  display: flex;
  flex-direction: column;
}
.user-info>div{
  display: flex;
  align-items: center;
}
.user-info__name{
  margin-left: 24px;
}
.menu{
  border: none;
}
</style>
