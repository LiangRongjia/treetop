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
  name: 'MyJobs',
  components: {
    'list-card':ListCard
  },
  data () {
    return {
      requiresFields: [ 'name', 'state', 'description' ],
      tasksFields: [ 'name', 'state', 'host', 'description' ],
      defectsFields: ['name', 'state', 'description'],
      meetingsFields: ['type', 'date', 'description', 'attachment'],
      requires: [
        {
          ID: 1,
          name: 'require1',
          state: 'done',
          desciption: 'require1 description'
        },
        {
          ID: 3,
          name: 'require3',
          state: 'done',
          desciption: 'require3 description'
        }
      ],
      tasks: [
        {
          ID: 1,
          name: 'task1',
          state: 'done',
          host: 'liangrongjia',
          desciption: 'task1 description'
        },
        {
          ID: 3,
          name: 'task2',
          state: 'done',
          host: 'liangrongjia',
          desciption: 'task2 description'
        }
      ],
      defects: [
        {
          ID: 3,
          name: 'defect2',
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
