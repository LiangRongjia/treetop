<template>
  <el-card class="my-info__card">
    <div slot="header">
      <span>我的资料</span>
      <el-button
        class="header-button"
        type="text"
        @click="edittingMyInfo=true">
        编辑
      </el-button>
    </div>
    <div class="card-content">
      <el-card shadow="never">
        <div slot="header">头像</div>
        <img :src="user.avatar">
      </el-card>
      <el-card shadow="never" class="myInfo__card">
        <div slot="header">资料</div>
        <h1>ID</h1>
        <p>{{user.ID}}</p>
        <h1>姓名</h1>
        <p>{{user.name}}</p>
      </el-card>
    </div>
    <edit-info-dialog
      :visible="edittingMyInfo"
      :closeDialog="()=>{edittingMyInfo=false}"
      :user="user">
    </edit-info-dialog>
  </el-card>
</template>

<script>

import EditInfoDialog from './EditInfoDialog'

export default {
  props: {
    user: Object
  },
  components: {
    'edit-info-dialog': EditInfoDialog
  },
  data: function () {
    return {
      edittingMyInfo: false
    }
  }
}
</script>

<style scoped>
.my-info__card{
  margin: 24px;
  height: max-content;
}
.card-content{
  display: flex;
}
.myInfo__card h1{
  font-size: 18px;
}
.myInfo__card p{
  padding: 12px 0px;
}
.card-content>*{
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0px 12px;
}
.my-info__edit-dialog h1{
  font-size: 18px;
  padding: 12px 0px;
}
.header-button{
  float: right;
  margin-top: -8px;
  margin-right: 12px;
  padding: 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
