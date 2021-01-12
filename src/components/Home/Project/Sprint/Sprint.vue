<template>
  <div>
    <el-select class="sprint__card" v-model="sprintIndex">
      <el-option
        v-for="(item, index) in sprintsList"
        :key="index"
        :label="index + 1 + ' : ' + item.title"
        :value="index">
      </el-option>
    </el-select>
    <sprint-info class="sprint__card"
      :title="sprintsList[sprintIndex].title"
      :startDate="sprintsList[sprintIndex].startDate"
      :endDate="sprintsList[sprintIndex].endDate"
      :description="sprintsList[sprintIndex].description"/>
    <list-card class="sprint__card"
      title="Requires"
      @add="addRequires"
      :data="requires"
      :fields="requiresFields"/>
    <list-card class="sprint__card"
      title="Tasks"
      @add="addTasks"
      :data="tasks"
      :fields="tasksFields"/>
    <list-card class="sprint__card"
      title="Defects"
      @add="addDefects"
      :data="defects"
      :fields="defectsFields"/>
    <meetings class="sprint__card"
      @addMeeting="addMeeting"
      :data="meetings"
      :fields="meetingsFields"/>
    <el-dialog class="sprint__add-meeting-dialog" title="Add Meeting"
      :visible.sync="isAddMeeting"
      :modal="false">
      <h1>Type</h1>
      <el-input v-model="newMeeting.type" placeholder="请输入内容"></el-input>
      <h1>Date</h1>
      <el-date-picker v-model="newMeeting.date" type="date"/>
      <h1>Description</h1>
      <el-input v-model="newMeeting.description" type="textarea" placeholder="请输入内容"></el-input>
      <h1>Attachment</h1>
      <p>{{newMeeting.attachment}}</p>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAddMeeting = false">取消</el-button>
        <el-button type="primary" @click="isAddMeeting = false">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import ListCard from './ListCard.vue'
import SprintInfo from './SprintInfo.vue'
import Meetings from './Meetings.vue'
export default{
  title: 'ProjectSprint',
  components: {
    'list-card': ListCard,
    'sprint-info': SprintInfo,
    'meetings': Meetings
  },
  props: [
    // projectIndex 依赖于组件参数 props
    'projectIndex'
  ],
  data () {
    return {
      isAddMeeting: false,
      newMeeting: { type: '', date: '', description: '', attachment: '', },
      sprintsList: [{ ID: '', title: '', description: '', start: '', end: '' }],
      sprintIndex: 0,
      sprinyID: 0,
      sprint: {
        ID: 1,
        title: 'firstSprint',
        description: 'firstSprint\'s description',
        start: '2020/12/27',
        end: '2020/12/28'
      },
      requiresFields: [ 'title', 'type', 'kind', 'priority', 'description', 'endDate', 'stitle' ],
      tasksFields: [ 'title', 'state', 'username', 'startDate', 'endDate', 'priority', 'description' ],
      defectsFields: ['title', 'type', 'state', 'endDate', 'description'],
      meetingsFields: ['type', 'date', 'description', 'attachment'],
      requires: [{ title: '', type: '', kind: '', priority: '', description: '', endDate: '', stitle: '', state: '' }],
      tasks: [{ title: '', state: '', username: '', startDate: '', endDate: '', priority: '', description: '' }],
      defects: [{ title: '', type: '', state: '', endDate: '', description: '' }],
      meetings: [
        { ID: 1, type: "Require", description: 'Description of meetings 1', date: '2020.12.09', attachment: 'attachment' },
        { ID: 2, type: "Require", description: 'Description of meetings 2', date: '2020.12.09', attachment: 'attachment' }
      ]
    }
  },
  watch: {
    // 若 projectID 变更，更新页面
    projectID (to, from) {
      this.sprintIndex = 0
      this.getSprints()
    },
    sprintIndex (to, from){
      this.getRequires()
      this.getTasks()
      this.getDefects()
      this.getMeetings()
    }
  },
  mounted () {
    this.getSprints()
    // 包含了回调：
    // this.getRequires()
    // this.getTasks()
    // this.getDefects()
    // this.getMeetings()
  },
  methods: {
    addRequires () {
      this.$alert('Add a require', 'dialog', { confirmButtonText: 'OK' })
    },
    addTasks () {
      this.$alert('Add a task', 'dialog', { confirmButtonText: 'OK' })
    },
    addDefects () {
      this.$alert('Add a defect', 'dialog', { confirmButtonText: 'OK' })
    },
    addMeeting () {
      this.isAddMeeting = true
    },
    getSprints () {
      var projectID = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].ID
      this.axios
      .post('http://39.97.175.119:8801/sprint/getSpListByPID?ID=' + projectID)
      .then((response) => {
        if(response.data.message == '成功'){
          if(response.data.data.spList.length > 0){
            this.sprintsList = response.data.data.spList
            this.getRequires()
            this.getTasks()
            this.getDefects()
            // this.getMeetings()
          }
        }
      })
    },
    getRequires () {
      var sprintID = this.sprintsList[this.sprintIndex].ID
      this.axios
      .post('http://39.97.175.119:8801/requirement/getReqtListByPID?ID=' + sprintID)
      .then((response) => {
        if(response.data.message == '成功'){
          this.requires = response.data.data.reqtList
        }
      })
    },
    getDefects () {
      var sprintID = this.sprintsList[this.sprintIndex].ID
      this.axios
      .post('http://39.97.175.119:8801/defect/getDefListBySID?ID=' + sprintID)
      .then((response) => {
        if(response.data.message == '成功'){
          this.defects = response.data.data.defectList
        }
      })
    },
    getTasks () {
      var sprintID = this.sprintsList[this.sprintIndex].ID
      this.axios
      .get('http://39.97.175.119:8801/task/getTaskListBySid?sprintid=' + sprintID)
      .then((response) => {
        if(response.data.message == '成功'){
          this.tasks = response.data.data.task
        }
      })
    },
    getMeetings () {
      var sprintID = this.sprintsList[this.sprintIndex].ID
      this.axios
      .post('http://39.97.175.119:8801/??')
      .then((response) => {
        if(response.data.message == '成功'){
          this.defects = response.data.data.reqtList
        }
      })
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
</style>
