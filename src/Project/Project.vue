<template>
  <div>
    <el-tabs value="sprint" type="card">
      <el-tab-pane label="基本" name="basic">
        <basic-page :project="project"></basic-page>
      </el-tab-pane>
      <el-tab-pane label="迭代" name="sprint">
        <project-sprint
          :sprints="sprints"
          :requires="requires"
          :tasks="tasks"
          :defects="defects"
          :meetings="meetings"/>
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
      <el-tab-pane label="会议" name="meetings">
        <meetings-page :meetings="meetings"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import ProjectRequire from './Require/Require.vue'
import ProjectSprint from './SprintPage/SprintPage.vue'
import ProjectProgress from './Progress/Progress.vue'
import ProjectDefect from './Defect/Defect.vue'
import BasicPage from './BasicPage/BasicPage.vue'
import ProjectTeam from './Team.vue'
import MeetingsPage from './Meetings/Meetings.vue'

export default {
  components: {
    'project-sprint': ProjectSprint,
    'project-require': ProjectRequire,
    'basic-page': BasicPage,
    'project-defect': ProjectDefect,
    'project-progress': ProjectProgress,
    'project-team': ProjectTeam,
    'meetings-page': MeetingsPage
  },
  props: {
    project: Object
  },
  computed: {
    sprints: function () {
      return this.project.sprints || []
    },
    requires: function () {
      return this.project.requires || []
    },
    tasks: function () {
      return this.project.tasks || []
    },
    defects: function () {
      return this.project.defects || []
    },
    meetings: function () {
      return this.project.meetings || []
    }
  },
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
      }).then((response) => {
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
