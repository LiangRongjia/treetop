<template>
  <el-dialog
    class="sprint__create-sprint-dialog"
    title="Add Meeting"
    :visible.sync="visable"
    :modal-append-to-body="false"
    :show-close="false">
    <h1>标题</h1>
    <el-input v-model="title"></el-input>
    <h1>开始日期</h1>
    <el-date-picker v-model="startDate" type="date"/>
    <h1>结束日期</h1>
    <el-date-picker v-model="endDate" type="date"/>
    <h1>描述</h1>
    <el-input v-model="description" type="textarea"></el-input>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('cancelCreateSprint')">取消</el-button>
      <el-button type="primary" @click="createSprint">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>

export default {
  props: {
    visable: Boolean
  },
  data: function () {
    return {
      title: '',
      startDate: '',
      endDate: '',
      description: ''
    }
  },
  methods: {
    createSprint: function () {
      this.$emit('createSprint', this.title, this.startDate, this.endDate, this.description)
    }
  }
}
</script>

<style>
.sprint__card{
  margin: 0px 24px 24px 24px;
}
.sprint__create-sprint-dialog h1{
  font-size: 18px;
  padding: 12px 0px;
}
</style>
