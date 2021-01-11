<template>
  <div>
    <el-select class="sprint__card" v-model="sprintIndex">
      <el-option
        v-for="(item, index) in sprintsList"
        :key="index"
        :label="index + 1 + ' : ' + item.name"
        :value="index">
      </el-option>
    </el-select>
    <sprint-info class="sprint__card"
      :name="sprint.name"
      :start="sprint.start"
      :end="sprint.end"
      :description="sprint.description"/>
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
/* 该组件依据当前项目名，获取所有迭代信息
 * 当前项目名从路径(或全局变量？])获取
 */
export default{
  name: 'ProjectSprint',
  components: {
    'list-card': ListCard,
    'sprint-info': SprintInfo,
    'meetings': Meetings
  },
  props: [
    // projectID 依赖于组件参数 props
    'projectID'
  ],
  data () {
    return {
      isAddMeeting: false,
      newMeeting:{
        type: '',
        date: '',
        description: '',
        attachment: '',
      },
      sprintsList: [
        { ID: 1, name: 'firstSprint' },
        { ID: 2, name: 'secondSprint' }
      ],
      sprintIndex: 0,
      sprint: {
        ID: 1,
        name: 'firstSprint',
        description: 'firstSprint\'s description',
        start: '2020/12/27',
        end: '2020/12/28'
      },
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
      meetings: [
        {
        ID: 1,
        type: "Require",
        description: 'Description of meetings 1',
        date: '2020.12.09',
        attachment: 'attachment'
        },
        {
          ID: 2,
          type: "Require",
          description: 'Description of meetings 2',
          date: '2020.12.09',
          attachment: 'attachment'
        }
      ]
    }
  },
  watch: {
    // 若 projectID 变更，更新页面
    projectID (to, from) {
      // update
      this.sprintList = this.sprintList
      this.sprintIndex = 0
      this.sprint = this.sprint
      this.requires = this.requires
      this.tasks = this.tasks
      this.defects = this.defects
    }
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
