<template>
  <div>
    <el-tabs v-model="tab" type="card">
      <el-tab-pane label="基本" name="basic">
        <project-basic :project="project"/>
      </el-tab-pane>
      <el-tab-pane label="迭代" name="sprint">
        <project-sprint :project="project"/>
      </el-tab-pane>
      <el-tab-pane label="需求" name="require">
        <project-require :project="project"/>
      </el-tab-pane>
      <el-tab-pane label="进度" name="progress">
        <project-progress :project="project"/>
      </el-tab-pane>
      <el-tab-pane label="缺陷" name="defect">
        <project-defect :project="project"/>
      </el-tab-pane>
      <el-tab-pane label="团队" name="team">
        <project-team :project="project" :list="list"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import ProjectRequire from './Require/Require.vue'
import ProjectSprint from './Sprint/Sprint.vue'
import ProjectProgress from './Progress/Progress.vue'
import ProjectDefect from './Defect/Defect.vue'
import ProjectBasic from './Basic/Basic.vue'
import ProjectTeam from './Team.vue'

/* 普通情况下，组件使用 props 传参
 * 本组件由于用于 route-view，无法传动态参数（静态参数可传，但这里需要动态参数）
 * 故使用全局变量传参
 * 下属组件不用路由，没有 route-view 情形，故不要使用全局变量，请使用 props 传参
 */
export default {
  components: {
    'project-sprint': ProjectSprint,
    'project-require': ProjectRequire,
    'project-basic': ProjectBasic,
    'project-defect': ProjectDefect,
    'project-progress': ProjectProgress,
    'project-team': ProjectTeam
  },
  props: [
    'project'
  ],
  data: function () {
    return {
      list: []
    }
  },
  methods: {
    show: function () {
      this.axios.get('http://39.97.175.119:8801/project/getMemberListByPID', {
        params: {
          ID: this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].ID
        }
      })
        .then((response) => {
          if (response.data.message === '成功') {
            this.list = response.data.data.memberList
          }
        })
    }
  }
}
</script>

<style>
</style>
