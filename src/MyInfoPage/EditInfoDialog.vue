<template>
  <el-dialog
    class="my-info__edit-dialog"
    title="修改我的资料"
    :visible.sync="visible"
    :modal-append-to-body="false"
    :show-close="false">
    <h1>姓名</h1>
    <el-input v-model="newName"></el-input>
    <h1>密码</h1>
    <el-input v-model="newPassword" type="password"></el-input>
    <h1>头像</h1>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false">
      <img
        v-if="user.avatar"
        :src="user.avatar"
        class="avatar"/>
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="updateMyInfo">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>

export default {
  props: {
    visible: Boolean,
    closeDialog: Function,
    user: Object
  },
  data: function () {
    return {
      newName: this.user.name,
      newAvatar: this.user.avatar,
      newPassword: ''
    }
  },
  methods: {
    updateMyInfo: function () {
      this.$bus.$emit(
        'updateMyInfo',
        this.user.ID,
        this.newName,
        this.newAvatar,
        this.newPassword
      )
      this.closeDialog()
    }
  }
}
</script>
