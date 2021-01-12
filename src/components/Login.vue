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
      userName: 'test-user1',
      password: ''
    }
  },
  methods: {
    login () {
      // 登录，获取用户信息，后获取所有项目
      this.axios.get('http://39.97.175.119:8801/user/login', {
        params: {
          name: this.userName,
          password: this.password
        }
      })
      .then((response) => {
        if(response.data.message == '成功'){
          this._GLOBAL.userID = response.data.data.user.ID
          this._GLOBAL.userObj = response.data.data.user
          this.$router.push('/' + this._GLOBAL.userObj.name)
          // 获取所有项目
          // this.axios.get('http://39.97.175.119:8801/user/login', {
          //   params: {
          //     userID: this._GLOBAL.userObj.ID
          //   }
          // })
          // .then((response) => {
          //   console.log(response);
          //   if(response.data.message == '成功'){
          //     this._GLOBAL.ProjectList =
          //   }
          // }
        }
        else{
          this.$alert('The login failed, please re-enter your username and password', 'Login Failed', { confirmButtonText: 'OK' })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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
