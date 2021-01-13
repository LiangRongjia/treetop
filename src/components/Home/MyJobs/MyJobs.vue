<template>
  <div>
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
    'list-card': ListCard
  },
  data () {
    return {
      requiresFields: [ 'title', 'type', 'kind', 'priority', 'description', 'endDate', 'stitle' ],
      tasksFields: [ 'title', 'state', 'username', 'startDate', 'endDate', 'priority', 'description' ],
      defectsFields: ['title', 'type', 'state', 'endDate', 'description'],
      meetingsFields: ['type', 'date', 'description', 'attachment'],
      requires: [{ title: '', type: '', kind: '', priority: '', description: '', endDate: '', stitle: '', state: '' }],
      tasks: [{ title: '', state: '', username: '', startDate: '', endDate: '', priority: '', description: '' }],
      defects: [{ title: '', type: '', state: '', endDate: '', description: '' }],
    }
  },
  mounted () {
    this.getData()
  },
  methods:{
    getData () {
      // 'headers': {'Access-Control-Allow-Origin': '*','access-control-allow-credentials': 'true'}
      // this.axios.setRequestHeader()
      var userID = this._GLOBAL.userObj.ID
      var url = this._GLOBAL.baseUrl + '/task/getTaskListByUid?userid=' + userID
      this.axios.get(url).then((response) => {
        if(response.data.message == '成功'){
          this.tasks = response.data.data.task
        }
      })
      url = this._GLOBAL.baseUrl + '/defect/getDefListByUID?ID=1'// + userID
      this.axios.post(url).then((response) => {
        if(response.data.message == '成功'){
          this.defects = response.data.data.defectList
        }
      })
    }
  }
}
</script>

<style>
  .my-jobs__card{
    margin: 24px 24px 24px 24px;
  }
</style>
