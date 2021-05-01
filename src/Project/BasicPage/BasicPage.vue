<template>
  <div>
    <basic-info
      class="basic__card"
      :name="basic.name"
      :hostname="basic.hostname"
      :start="basic.start"
      :end="basic.end"
      :description="basic.description"
      :state="basic.state">
    </basic-info>
    <basic-sprint
      class="basic__card"
      :name="sprint.name"
      :state="sprint.state"
      :time="sprint.time">
    </basic-sprint>
    <basic-rtd
      class="basic__card"
      :count="rtd.count" :already="rtd.already"
      :processing="rtd.processing"
      :nostarting="rtd.nostarting"
      :percentage="rtd.percentage"
      :dCnt="rtd.dCnt"
      :rCnt="rtd.rCnt">
    </basic-rtd>
  </div>
</template>
<script>

import BasicInfo from './BasicInfo.vue'
import BasicSprint from './BasicSprint.vue'
import BasicRTD from './BasicRTD.vue'

/* 该组件依据当前项目名，获取所有迭代信息
 * 当前项目名从路径(或全局变量？])获取
 */

export default {
  name: 'Project',
  components: {
    'basic-info': BasicInfo,
    'basic-sprint': BasicSprint,
    'basic-rtd': BasicRTD
  },
  props: [
    // projectID 依赖于组件参数 props
    'projectID'
  ],
  data: function () {
    return {
      basic: {
        name: this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].name,
        hostname: this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].hostName,
        description: this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].description,
        start: this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].startDate,
        end: this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].endDate,
        state: this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].state
      },
      sprint: {
        name: '',
        state: '',
        time: ''
      },
      rtd: {
        count: 0,
        already: 0,
        processing: 0,
        nostarting: 0,
        percentage: 0,
        dCnt: 0,
        rCnt: 0
      }
    }
  },
  watch: {
    // 若 projectID 变更，更新页面
    projectID: function (to, from) {
      this.basic.name = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].name
      this.basic.hostname = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].hostName
      this.basic.description = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].description
      this.basic.start = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].startDate
      this.basic.end = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].endDate
      this.basic.state = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].state
      this.getSprintName()
      this.calculate()
    }
  },
  created: function () {
    this.func()
    this.$eventBus.$on('refreshbi', () => {
      this.func()
    })
  },
  mounted: function () {
    this.func()
  },
  methods: {
    func: function () {
      this.basic.name = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].name
      this.basic.hostname = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].hostName
      this.basic.description = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].description
      this.basic.start = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].startDate
      this.basic.end = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].endDate
      this.basic.state = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].state
    },
    getSprintName: function () {
      this.axios.post('http://39.97.175.119:8801/sprint/getSpListByPID?ID=' + this._GLOBAL.ProjectList[this._GLOBAL.projectIndex]
        .ID)
        .then((response) => {
          if (response.data.message === '成功') {
            var list = response.data.data.spList
            if (list.length > 0) {
              this.sprint.name = list[list.length - 1].title
              this.sprint.state = list[list.length - 1].state
              this.sprint.time = list[list.length - 1].endDate
            } else {
              this.sprint.name = 'NaN'
              this.sprint.state = 'NaN'
              this.sprint.time = 'NaN'
            }
            // console.log(this.isHost);
          }
        })
    },
    calculate: function () {
      this.axios.get('http://39.97.175.119:8801/task/getTaskListByPid?projectid=' + this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].ID)
        .then((response) => {
          if (response.data.message === '成功') {
            var taskList = response.data.data.task
            this.rtd.count = 0
            this.rtd.already = 0
            this.rtd.processing = 0
            this.rtd.nostarting = 0
            for (let task of taskList) {
              this.rtd.count++
              if (task.state === '已完成') this.rtd.already++
              else if (task.state === '未开始') this.rtd.nostarting++
              else this.rtd.processing++
            }
            this.rtd.percentage = this.rtd.count / this.rtd.already
          }
        })
        .catch(function (error) {
          console.log(error)
        })
      this.axios.post('http://39.97.175.119:8801/requirement/getReqtListByPID?ID=' + this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].ID)
        .then((response) => {
          if (response.data.message === '成功') {
            this.rtd.rCnt = response.data.data.reqtList.length
          }
        })
        .catch(function (error) {
          console.log(error)
        })
      this.axios.post('http://39.97.175.119:8801/defect/getDefListByPID?ID=' + this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].ID)
        .then((response) => {
          if (response.data.message === '成功') {
            this.rtd.dCnt = response.data.data.defectList.length
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style>
  .basic__card {
    margin: 0px 24px 24px 24px;
  }
</style>
