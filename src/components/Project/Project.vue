<template>
  <div>
    <el-tabs v-model="tab" type="card">
      <el-tab-pane label="Basic" name="basic">
        <project-basic></project-basic>
      </el-tab-pane>
      <el-tab-pane label="Sprint" name="sprint">
        <project-sprint></project-sprint>
      </el-tab-pane>
      <el-tab-pane label="Require" name="require">
        <project-require></project-require>
      </el-tab-pane>
      <el-tab-pane label="Progress" name="progress">
        <project-progress></project-progress>
      </el-tab-pane>
      <el-tab-pane label="Defect" name="defect">
        <project-defect></project-defect>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ProjectRequire from './Require.vue'
import ProjectSprint from './Sprint/Sprint.vue'
import ProjectProgress from './Progress.vue'
import ProjectDefect from './Defect.vue'
import ProjectBasic from './Basic.vue'

export default{
  name: 'Project',
  components: {
    'project-sprint': ProjectSprint,
    'project-require': ProjectRequire,
    'project-basic': ProjectBasic,
    'project-defect': ProjectDefect,
    'project-progress': ProjectProgress
  },
  data () {
    return {
      tab: 'basic'
    }
  },
  computed: {
    // userName数据源于当前路径
    userName: function () {
      return this.$route.params.userName
    },
    // project数据源于当前路径
    project: function () {
      return this.$route.params.project
    }
  },
  watch: {
    project (to, form) {
      // 更新数据以更新页面
      // 自动导航到第一个标签页，只导航了内容，导航栏指示没有更改
      // this.$router.replace('/' + this.userName + '/' + this.project + '/' + this.tabs[0].path)
      // 手动更改 tabs 导航栏的指示。依然有缺陷，历史回退的时候指示不正确
      // this.$refs['project-tabs-menu']['activeIndex'] = this.tabs[0].path
    },
    Tab (to, from) {
      // this.$refs['project-tabs-menu']['activeIndex'] = to
    }
  },
  // 挂载组件时的操作
  mounted () {
    // 自动导航到第一个标签页
    // this.$router.replace('/' + this.userName + '/' + this.project + '/' + this.tabs[0].path)
  },
  methods: {
    toTab (path) {
      this.$router.push('/' + this.userName + '/' + this.project + '/' + path)
    }
  }
}
</script>

<style>
</style>
