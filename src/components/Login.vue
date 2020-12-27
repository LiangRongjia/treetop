<template>
  <div class="login">
    <el-card class="login__card">
      <div slot="header">Login</div>
      <el-form>
        <el-form-item label="User name">
          <el-input v-model="userName"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="login">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default{
  name: 'Login',
  data () {
    return {
      userName: 'liangrongjia',
      password: ''
    }
  },
  methods: {
    login () {
      this.$router.push('/' + this.userName)
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
  }
  .login__card{
    width: 300px;
  }
</style>
