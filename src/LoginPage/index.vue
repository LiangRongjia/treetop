<template>
  <div class="login">
    <el-card class="login__card">
      <div slot="header">登录</div>
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password"></el-input>
          <el-button
            type="text"
            class="register"
            @click="registering = true">
            注册
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <register-dialog :visible="registering"></register-dialog>
  </div>
</template>

<script>

import RegisterDialog from './RegisterDialog.vue'

export default {
  components: {
    'register-dialog': RegisterDialog
  },
  data: function () {
    return {
      registering: false,
      userName: 'test-user1',
      password: ''
      // registerUserName: 'test-user',
      // password: '',
      // ruleForm: {
      //   pass: '',
      //   checkPass: ''
      // },
      // rules: {
      //   pass: [
      //     { validator: validatePass, trigger: 'blur' }
      //   ],
      //   checkPass: [
      //     { validator: validatePass2, trigger: 'blur' }
      //   ]
      // }
    }
  },
  methods: {
    login: function () {
      this.$emit('login', this.userName, this.password)
    }
  }
}
</script>

<style>
  .login{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-image: url('../assets/OIP.jpg');
    background-size: cover;
    grid-row: 1/2;
    grid-column: 1/25;
  }
  .login__card{
    width: 300px;
  }
  .register{
    margin-left: 210px;
  }
</style>
