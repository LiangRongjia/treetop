<template>
  <el-card class="my-info__card">
    <div slot="header">
      <span>我的资料</span>
      <el-button class="header-button" type="text" @click="editMyInfo">编辑</el-button>
    </div>
    <div class="card-content">
      <el-card shadow="never">
        <div slot="header">头像</div>
        <img :src="MyInfo.avatar">
      </el-card>
      <el-card shadow="never" class="myInfo__card">
        <div slot="header">资料</div>
        <h1>ID</h1>
        <p>{{MyInfo.ID}}</p>
        <h1>姓名</h1>
        <p>{{MyInfo.name}}</p>
      </el-card>
    </div>
    <el-dialog class="my-info__edit-dialog" title="Editting My Information " :visible.sync="isMyInfoEditting" :modal="false">
      <h1>姓名</h1>
      <el-input v-model="newMyInfo.name"></el-input>
      <h1>密码</h1>
      <el-input v-model="newMyInfo.password" type="password"></el-input>
      <h1>头像</h1>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isMyInfoEditting = false">取消</el-button>
        <el-button type="primary" @click="confirmEdit">确定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data: function () {
    return {
      isMyInfoEditting: false,
      imageUrl: '',
      MyInfo: {
        ID: this._GLOBAL.userObj.ID,
        name: this._GLOBAL.userObj.name,
        avatar: this._GLOBAL.imgBaseUrl + this._GLOBAL.userObj.avatar
      },
      newMyInfo: {
        ID: this._GLOBAL.userObj.ID,
        name: this._GLOBAL.userObj.name,
        avatar: this._GLOBAL.imgBaseUrl + this._GLOBAL.userObj.avatar,
        password: ''
      }
    }
  },
  methods: {
    editMyInfo: function () {
      this.isMyInfoEditting = true
    },
    confirmEdit: function () {
      this.isMyInfoEditting = false
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
