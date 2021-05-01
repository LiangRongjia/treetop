<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <div slot="header">任务进度</div>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-progress
                type="dashboard"
                :percentage="percentage"
                :color="colors"
                style="position: relative; left: 25%;">
              </el-progress>
            </el-col>
            <el-col :span="10" :offset="1">
              <p>全部: {{count}}</p><br />
              <p>等待: {{nostarting}}</p><br />
              <p>进行中: {{processing}}</p><br />
              <p>已完成: {{already}}</p><br />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div slot="header">项目概况</div>
          <el-col :span="12" :offset="2">
          <div id="main" style="width: 200px; height:168px; align-content: center;"></div>
          </el-col>
          <el-col :span="8" :offset="1">
            <p>需求: {{rCnt}}</p><br />
            <p>任务: {{count}}</p><br />
            <p>缺陷: {{dCnt}}</p><br />
          </el-col>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 }
]

export default {
  props: [
    'count',
    'already',
    'processing',
    'nostarting',
    'percentage',
    'rCnt',
    'dCnt'
  ],
  data: function () {
    return {
      colors
    }
  },
  mounted: function () {
    this.myEcharts()
  },
  created: function () {
    // this.myEcharts()
  },
  watch: {
    // 若 projectID 变更，更新页面
    rCnt: function (to, from) {
      this.myEcharts()
    },
    dCnt: function (to, from) {
      this.myEcharts()
    },
    count: function (to, from) {
      this.myEcharts()
    }
  },
  methods: {
    calculate: function () {
      this.axios.get('http://39.97.175.119:8801/task/getTaskListByPid?projectid=' + this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].ID)
        .then((response) => {
          if (response.data.message === '成功') {
            var taskList = response.data.data.task
            console.log(taskList)
            this.count = 0
            this.already = 0
            this.processing = 0
            this.nostarting = 0
            for (let task of taskList) {
              this.count++
              if (task.state === '已完成') this.already++
              else if (task.state === '未开始') this.nostarting++
              else this.processing++
            }
            this.percentage = this.count / this.already
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    increase: function () {
      this.percentage += 10
      if (this.percentage > 100) {
        this.percentage = 100
      }
    },
    decrease: function () {
      this.percentage -= 10
      if (this.percentage < 0) {
        this.percentage = 0
      }
    },
    myEcharts: function () {
      // 基于准备好的dom，初始化echarts实例
      //  var myChart = this.$echarts.init(document.getElementById('main'));
      var myChart = require('echarts').init(document.getElementById('main'))
      // 指定图表的配置项和数据
      var option = {
        series: [{
          type: 'pie', // 设置图表类型为饼图
          radius: '80%', // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
          data: [{
            value: this.rCnt,
            name: 'Require'
          }, {
            value: this.count,
            name: 'Task'
          }, {
            value: this.dCnt,
            name: 'Defect'
          }]
        }]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>
  .card-content {
    display: flex;
  }

  .card-content>* {
    flex-grow: 1;
    flex-shrink: 1;
    margin: 0px 12px;
  }
</style>
