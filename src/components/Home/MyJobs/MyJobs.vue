<template>
  <div>
    <list-card class="my-jobs__card"
      title="My Requires"
      :data="requires"
      :fields="requiresFields"/>
    <list-card class="my-jobs__card"
      title="My Tasks"
      :data="tasks"
      :fields="tasksFields"/>
    <list-card class="my-jobs__card"
      title="My Defects"
      :data="defects"
      :fields="defectsFields"/>
  </div>
</template>

<script>
import ListCard from './ListCard.vue'
export default {
  title: 'MyJobs',
  components: {
    'list-card':ListCard
  },
  data () {
    return {
      requiresFields: [ 'projectName', 'title', 'state', 'description' ],
      tasksFields: [ 'projectName', 'title', 'state', 'host', 'description' ],
      defectsFields: [ 'projectName', 'title', 'state', 'description'],
      requires: [
        {
          projectName: 1,
          ID: 1,
          title: 'require1',
          state: 'done',
          desciption: 'require1 description'
        },
        {
          projectName: 1,
          ID: 3,
          title: 'require3',
          state: 'done',
          desciption: 'require3 description'
        }
      ],
      tasks: [
        {
          projectName: 1,
          ID: 1,
          title: 'task1',
          state: 'done',
          host: 'liangrongjia',
          desciption: 'task1 description'
        },
        {
          projectName: 1,
          ID: 3,
          title: 'task2',
          state: 'done',
          host: 'liangrongjia',
          desciption: 'task2 description'
        }
      ],
      defects: [
        {
          projectName: 1,
          ID: 3,
          title: 'defect2',
          state: 'done',
          desciption: 'defect2 description'
        }
      ],
    }
  }
}
</script>

<style>
  .my-jobs__card{
    margin: 24px 24px 24px 24px;
  }
</style>
