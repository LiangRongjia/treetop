<template>
  <el-card>
    <div slot="header">
      <span>迭代信息</span>
      <el-button
        class="header-button"
        type="text"
        @click="edittingSprintInfo=true">
        编辑
      </el-button>
    </div>
    <div class="card-content">
      <el-card shadow="never" class="card-content__card max-width">
        <div slot="header">基本信息</div>
        <p>标题 : {{title}}</p><br />
        <p>开始时间 : {{startDate}}</p><br />
        <p>结束时间 : {{endDate}}</p>
      </el-card>
      <el-card shadow="never" class="card-content__card">
        <div slot="header">详细描述</div>
        <p>{{description}}</p>
      </el-card>
    </div>
    <edit-sprint-info-dialog
      :visable="edittingSprintInfo"
      :ID="ID"
      :title="title"
      :startDate="startDate"
      :endDate="endDate"
      :description="description"
      :closeDialog="()=>{edittingSprintInfo=false}">
    </edit-sprint-info-dialog>
  </el-card>
</template>

<script>

import EditSprintInfoDialog from './EditSprintInfoDialog.vue'
export default {
  components: {
    'edit-sprint-info-dialog': EditSprintInfoDialog
  },
  props: {
    ID: Number,
    title: String,
    startDate: String,
    endDate: String,
    description: String
  },
  data: function () {
    return {
      edittingSprintInfo: false,
      sprintInfo: {
        title: this.title,
        startDate: this.startDate,
        endDate: this.endDate,
        description: this.description
      }
    }
  },
  mounted: function () {
    this.$bus.$on('', () => {})
  }
}
</script>

<style scoped>
.card-content{
  display: flex;
}
.card-content__card{
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0px 12px;
}
.max-width{
  width: 500px;
}
.sprint__edit-sprint-dialog h1{
  font-size: 18px;
  padding: 12px 0px;
}
.header-button{
  float: right;
  margin-top: -8px;
  margin-right: 12px;
  padding: 10px;
}
</style>
