<template>
  <div>
    <el-tabs value="sprint" type="card">
      <el-tab-pane label="基本" name="basic">
        <basic-page :project="project"></basic-page>
      </el-tab-pane>
      <el-tab-pane label="迭代" name="sprint">
        <sprint-page
          :sprints="sprints"
          :requirements="requirements"
          :tasks="tasks"
          :defects="defects"
          :meetings="meetings">
        </sprint-page>
      </el-tab-pane>
      <el-tab-pane label="需求" name="requirement">
        <requirement-page :project="project"></requirement-page>
      </el-tab-pane>
      <el-tab-pane label="进度" name="progress">
        <progress-page :project="project"></progress-page>
      </el-tab-pane>
      <el-tab-pane label="缺陷" name="defect">
        <defect-page :project="project"></defect-page>
      </el-tab-pane>
      <el-tab-pane label="团队" name="team">
        <team-page
          :members="members"
          :projectID="project.ID">
        </team-page>
      </el-tab-pane>
      <el-tab-pane label="会议" name="meetings">
        <meetings-page :meetings="meetings"></meetings-page>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import RequirementPage from './RequirePage'
import SprintPage from './SprintPage'
import ProgressPage from './ProgressPage'
import DefectPage from './DefectPage'
import BasicPage from './BasicPage'
import TeamPage from './TeamPage'
import MeetingsPage from './MeetingsPage'

export default {
  components: {
    'basic-page': BasicPage,
    'sprint-page': SprintPage,
    'requirement-page': RequirementPage,
    'progress-page': ProgressPage,
    'defect-page': DefectPage,
    'team-page': TeamPage,
    'meetings-page': MeetingsPage
  },
  props: {
    project: Object
  },
  computed: {
    members: function () {
      return this.project.members || []
    },
    sprints: function () {
      return this.project.sprints || []
    },
    requirements: function () {
      return this.project.requirements || []
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
  }
}
</script>

<style>
</style>
