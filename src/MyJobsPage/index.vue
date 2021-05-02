<template>
  <div>
  <list-card class="my-jobs__card"
    title="我负责的需求"
    :data="requirements"
    :fields="requirementsFields"/>
  <list-card class="my-jobs__card"
    title="我负责的任务"
    :data="tasks"
    :fields="tasksFields"/>
  <list-card class="my-jobs__card"
    title="我负责的缺陷"
    :data="defects"
    :fields="defectsFields"/>
  </div>
</template>

<script>

import ListCard from './ListCard.vue'

const requirementsFields = [
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

export default {
  components: {
    'list-card': ListCard
  },
  props: {
    userID: Number,
    projects: Array
  },
  computed: {
    requirements: function () {
      return this.projects.map(project => (
        project.requirements.filter(requirement => (
          requirement.hostID === this.userID
        ))
      )).flat()
    },
    tasks: function () {
      return this.projects.map(project => (
        project.tasks.filter(task => (
          task.hostID === this.userID
        ))
      )).flat()
    },
    defects: function () {
      return this.projects.map(project => (
        project.defects.filter(defect => (
          defect.hostID === this.userID
        ))
      )).flat()
    }
  },
  data: function () {
    return {
      requirementsFields,
      tasksFields,
      defectsFields
    }
  }
}
</script>

<style>
  .my-jobs__card{
    margin: 24px 24px 24px 24px;
  }
</style>
