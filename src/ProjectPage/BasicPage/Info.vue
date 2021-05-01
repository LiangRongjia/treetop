<template>
  <div>
    <el-card>
      <div slot="header">
        <span>基本信息</span>
        <el-button
          class="header-button"
          @click="edittingInfo=true"
          type="text">
          编辑
        </el-button>
        <edit-info-dialog
          :visible="edittingInfo"
          :name="name"
          :startDate="startDate"
          :endDate="endDate"
          :status="status"
          :description="description"
          :closeDialog="()=>{edittingInfo=false}">
        </edit-info-dialog>
      </div>
      <div class="card-content">
        <el-card shadow="never">
          <div slot="header">基本</div>
          <p>项目名 : {{name}}</p><br />
          <p>负责人: {{hostName}}</p><br />
          <p>开始时间 : {{startDate}}</p><br />
          <p>结束时间 : {{endDate}}</p><br />
          <p>状态 : {{status}}</p>
        </el-card>
        <el-card shadow="never">
          <div slot="header">详细描述</div>
          <p>{{description}}</p>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script>

import EditInfoDialog from './EditInfoDialog.vue'

export default {
  components: {
    'edit-info-dialog': EditInfoDialog
  },
  props: {
    name: String,
    hostName: String,
    startDate: String,
    endDate: String,
    status: String,
    description: String
  },
  data: function () {
    return {
      edittingInfo: false
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
.header-button{
  float: right;
  margin-top: -8px;
  margin-right: 12px;
  padding: 10px;
}
</style>
