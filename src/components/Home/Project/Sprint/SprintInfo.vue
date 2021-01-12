<template>
  <el-card>
    <div slot="header">
      <span>Sprint Info</span>
      <el-button class="header-button" type="text" @click="editSprintInfo">Edit</el-button>
    </div>
    <div class="card-content">
      <el-card shadow="never">
        <div slot="header">Sprint</div>
        <p>Name : {{name}}</p><br />
        <p>Start : {{start}}</p><br />
        <p>End : {{end}}</p>
      </el-card>
      <el-card shadow="never">
        <div slot="header">Description</div>
        <p>{{description}}</p>
      </el-card>
    </div>
    <el-dialog class="sprint__edit-sprint-dialog" title="Editting Sprint Info "
      :visible.sync="isSprintEditting"
      :modal="false">
      <h1>Name</h1>
      <el-input v-model="sprintInfo.name"placeholder="请输入内容"></el-input>
      <h1>Start</h1>
      <el-date-picker v-model="sprintInfo.start" type="date"/>
      <h1>End</h1>
      <el-date-picker v-model="sprintInfo.end" type="date"/>
      <h1>Description</h1>
      <el-input v-model="sprintInfo.description" type="textarea"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isSprintEditting = false">取消</el-button>
        <el-button type="primary" @click="isSprintEditting = false">确定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  name: 'SprintInfo',
  props: [
    'name',
    'start',
    'end',
    'description'
  ],
  data () {
    return {
      isSprintEditting: false,
      sprintInfo: {
        name: this.name,
        start: this.start,
        end: this.end,
        description: this.description
      }
    }
  },
  methods: {
    editSprintInfo () {
      this.isSprintEditting = true
    }
  }
}
</script>

<style scoped>
.card-content{
  display: flex;
}
.card-content>*{
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0px 12px;
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
