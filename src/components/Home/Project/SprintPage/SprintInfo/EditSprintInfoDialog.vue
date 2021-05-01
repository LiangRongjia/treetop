<template>
  <el-dialog class="sprint__edit-sprint-dialog" title="Editting Sprint Info" :visible.sync="visable" :modal="false">
    <h1>标题</h1>
    <el-input v-model="newTitle"></el-input>
    <h1>开始时间</h1>
    <el-date-picker v-model="newStartDate" type="date"/>
    <h1>结束时间</h1>
    <el-date-picker v-model="newEndDate" type="date"/>
    <h1>详细描述</h1>
    <el-input v-model="newDescription" type="textarea"></el-input>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('deleteSprint', ID)">删除迭代</el-button>
      <el-button @click="$emit('cancelEdit')">取消</el-button>
      <el-button type="primary" @click="updateSprintInfo">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>

export default {
  props: {
    visable: Boolean,
    ID: Number,
    title: String,
    startDate: String,
    endDate: String,
    description: String
  },
  data: function () {
    return {
      newTitle: this.title,
      newStartDate: this.startDate,
      newEndDate: this.endDate,
      newDescription: this.description
    }
  },
  methods: {
    updateSprintInfo: function () {
      this.$emit('updateSprintInfo',
        this.ID,
        this.newTitle,
        this.startDate,
        this.newEndDate,
        this.newDescription
      )
    }
  }
}
</script>
<style scoped>

</style>
