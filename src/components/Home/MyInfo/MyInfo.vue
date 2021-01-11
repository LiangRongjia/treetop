<template>
  <el-card class="my-info__card">
    <div slot="header">
      <span>My Information</span>
      <el-button class="header-button" type="text" @click="editMyInfo">Edit</el-button>
    </div>
    <div class="card-content">
      <el-card shadow="never">
        <div slot="header">Avatar</div>
        <img :src="MyInfo.avatar">
      </el-card>
      <el-card shadow="never" class="myInfo__card">
        <div slot="header">Information</div>
        <h1>ID</h1>
        <p>{{MyInfo.ID}}</p>
        <h1>Name</h1>
        <p>{{MyInfo.name}}</p>
      </el-card>
    </div>
    <el-dialog class="my-info__edit-dialog" title="Editting My Information "
      :visible.sync="isMyInfoEditting"
      :modal="false">
      <h1>Name</h1>
      <el-input v-model="newMyInfo.name"></el-input>
      <h1>Password</h1>
      <el-input v-model="newMyInfo.password"></el-input>
      <h1>Avatar</h1>
      <img :src="MyInfo.avatar">
      <el-upload>
        <el-button size="small"
        type="primary"
        :fileList="fileList">点击上传</el-button>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isMyInfoEditting = false">取消</el-button>
        <el-button type="primary" @click="isMyInfoEditting = false">确定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  title: 'MyInfo',
  data () {
    return {
      isMyInfoEditting: false,
      fileList:[],
      MyInfo: {
        ID: this._GLOBAL.userObj.ID,
        name: this._GLOBAL.userObj.name,
        avatar: this._GLOBAL.imgBaseUrl + this._GLOBAL.userObj.avatar
      },
      newMyInfo:{
        ID: this._GLOBAL.userObj.ID,
        name: this._GLOBAL.userObj.name,
        avatar: this._GLOBAL.imgBaseUrl + this._GLOBAL.userObj.avatar,
        password: ''
      }
    }
  },
  methods: {
    editMyInfo () {
      this.isMyInfoEditting = true
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
</style>
