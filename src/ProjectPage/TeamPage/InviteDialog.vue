<template>
  <el-dialog
    class="my-info__edit-dialog"
    title="邀请用户"
    :visible.sync="visible"
    :modal-append-to-body="false">
    <el-input
      v-model="userName"
      placeholder="输入要邀请的用户的姓名">
    </el-input>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="inviteIntoProject">邀请</el-button>
    </div>
  </el-dialog>
</template>
<script>

export default {
  props: {
    visible: Boolean,
    closeDialog: Function,
    projectID: Number
  },
  data: function () {
    return {
      userName: ''
    }
  },
  methods: {
    inviteIntoProject: function () {
      this.$bus.$emit('inviteIntoProject', this.projectID, this.userName)
      this.closeDialog()
    }
  }
}

</script>
