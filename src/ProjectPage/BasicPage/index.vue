<template>
  <div>
    <info
      class="basic__card"
      :name="project.name||' '"
      :hostName="project.hostName||' '"
      :startDate="project.startDate||' '"
      :endDate="project.endDate||' '"
      :description="project.description||' '"
      :status="project.status||' '">
    </info>
    <sprints
      class="basic__card"
      :title="lastSprint.title||' '"
      :status="lastSprint.status||' '"
      :endDate="lastSprint.endDate||' '">
    </sprints>
    <rtd
      class="basic__card"
      :count="rtd.count" :already="rtd.already"
      :processing="rtd.processing"
      :nostarting="rtd.nostarting"
      :percentage="rtd.percentage"
      :dCnt="rtd.dCnt"
      :rCnt="rtd.rCnt">
    </rtd>
  </div>
</template>
<script>

import Info from './Info.vue'
import Sprints from './Sprints'
import RTD from './RTD.vue'

/* 该组件依据当前项目名，获取所有迭代信息
 * 当前项目名从路径(或全局变量？])获取
 */

export default {
  components: {
    'info': Info,
    'sprints': Sprints,
    'rtd': RTD
  },
  props: {
    project: Object
  },
  computed: {
    lastSprint: function () {
      const sprintsCount = this.project.sprints.length
      return this.project.sprints[sprintsCount - 1] || {}
    }
  },
  data: function () {
    return {
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
  }
}
</script>

<style>
  .basic__card {
    margin: 0px 24px 24px 24px;
  }
</style>
