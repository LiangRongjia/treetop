<template>
  <div>
    <div class="sprint__card sprint-control">
      <el-select v-model="activeSprintIndex">
        <el-option
          v-for="item in sprints"
          :key="item.index"
          :label="`${item.index + 1} : ${item.title}`"
          :value="item.index">
        </el-option>
      </el-select>
      <el-button @click="creatingSprint = true">
        + 新建迭代
      </el-button>
      <create-sprint-dialog
        :visable="creatingSprint"
        @cancelCreateSprint="creatingSprint=false"
        @createSprint="createSprint"></create-sprint-dialog>
    </div>
    <sprint-info
      class="sprint__card"
      :ID="activeSprint.ID"
      :title="activeSprint.title"
      :startDate="activeSprint.startDate"
      :endDate="activeSprint.endDate"
      :description="activeSprint.description"/>
    <list-card
      class="sprint__card"
      title="需求"
      :data="activeRequirements"
      :fields="requiresFields"/>
    <list-card
      class="sprint__card"
      title="任务"
      :data="activeTasks"
      :fields="tasksFields"/>
    <list-card
      class="sprint__card"
      title="缺陷"
      :data="activeDefects"
      :fields="defectsFields"/>
    <meetings
      class="sprint__card"
      :data="activeMeetings"
      :fields="meetingsFields"/>
  </div>
</template>

<script>

import ListCard from './ListCard.vue'
import SprintInfo from './SprintInfo/SprintInfo.vue'
import Meetings from './Meetings.vue'
import CreateSprintDialog from './CreateSprintDialog.vue'

const requiresFields = [
  { label: '标题', prop: 'title' },
  { label: '类型', prop: 'type' },
  { label: '优先级', prop: 'priority' },
  { label: '详细描述', prop: 'description' },
  { label: '截止日期', prop: 'endDate' },
  { label: '状态', prop: 'state' }
]
const tasksFields = [
  { label: '标题', prop: 'title' },
  { label: '状态', prop: 'state' },
  { label: '负责人', prop: 'hostName' },
  { label: '负责人ID', prop: 'hostID' },
  { label: '开始时间', prop: 'startDate' },
  { label: '截止时间', prop: 'endDate' },
  { label: '优先级', prop: 'priority' },
  { label: '详细描述', prop: 'description' }
]
const defectsFields = [
  { label: '标题', prop: 'title' },
  { label: '类型', prop: 'type' },
  { label: '状态', prop: 'state' },
  { label: '截止日期', prop: 'endDate' },
  { label: '详细描述', prop: 'description' }
]
const meetingsFields = [
  { label: '标题', prop: 'title' },
  { label: '类型', prop: 'type' },
  { label: '详细描述', prop: 'description' },
  { label: '日期', prop: 'date' },
  { label: '附件', prop: 'attachments' }
]

export default {
  components: {
    'list-card': ListCard,
    'sprint-info': SprintInfo,
    'meetings': Meetings,
    'create-sprint-dialog': CreateSprintDialog
  },
  props: {
    sprints: Array,
    requires: Array,
    tasks: Array,
    defects: Array,
    meetings: Array
  },
  computed: {
    activeSprint: function () {
      return this.sprints.filter(sprint => sprint.index === this.activeSprintIndex)[0] || {}
    },
    activeRequirements: function () {
      return this.requires.filter(item => item.sprintID === this.activeSprint.ID)
    },
    activeTasks: function () {
      return this.tasks.filter(item => item.sprintID === this.activeSprint.ID)
    },
    activeDefects: function () {
      return this.defects.filter(item => item.sprintID === this.activeSprint.ID)
    },
    activeMeetings: function () {
      return this.meetings.filter(item => item.sprintID === this.activeSprint.ID)
    }
  },
  data: function () {
    return {
      requiresFields,
      tasksFields,
      defectsFields,
      meetingsFields,
      activeSprintIndex: 0,
      creatingSprint: false
    }
  },
  methods: {
    createSprint: function (title, startDate, endDate, description) {
      this.creatingSprint = false
      this.$bus.$emit('createSprint', title, startDate, endDate, description)
    }
  }
}

</script>

<style>
.sprint__card{
  margin: 0px 24px 24px 24px;
}
.sprint__add-meeting-dialog h1{
  font-size: 18px;
  padding: 12px 0px;
}
.sprint-control{
  display: flex;
}
.sprint-control>div{
  margin-right: 24px;
}
</style>
