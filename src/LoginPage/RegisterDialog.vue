<template>
  <el-dialog
    title="注册"
    width="50%"
    :visible.sync="visible"
    :modal-append-to-body="false">
    <el-form
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm">
      <el-form-item label="用户名">
        <el-input v-model="userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="checkPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>

// var validatePass = (rule, value, callback) => {
//   if (value === '') {
//     callback(new Error('请输入密码'))
//   } else {
//     if (this.ruleForm.checkPass !== '') {
//       this.$refs.ruleForm.validateField('checkPass')
//     }
//     callback()
//   }
// }
// var validatePass2 = (rule, value, callback) => {
//   if (value === '') {
//     callback(new Error('请再次输入密码'))
//   } else if (value !== this.ruleForm.pass) {
//     callback(new Error('两次输入密码不一致!'))
//   } else {
//     callback()
//   }
// }

export default {
  props: {
    visible: Boolean
  },
  data: function () {
    return {
      userName: '',
      password: '',
      checkPassword: ''
    }
  },
  methods: {
    register: function () {
      this.$emit('register', this.userName, this.password)
    }
  }
}
</script>
<style scoped>

</style>
