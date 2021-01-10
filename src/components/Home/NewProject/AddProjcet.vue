<template>
	<div>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<el-form-item label="项目ID">
				<el-input v-model="formInline.projectid" placeholder="请输入项目ID"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">申请加入</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          projectid: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>
</style>
