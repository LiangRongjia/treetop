<template>
	<div>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
			<el-form-item label="项目名称" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="项目开始时间" prop="date1">
				<el-col :span="11">
					<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
				</el-col>
			</el-form-item>
			<el-form-item label="项目结束时间" prop="date2">
				<el-col :span="11">
					<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
				</el-col>
			</el-form-item>
			<el-form-item label="项目描述" prop="desc">
				<el-input type="textarea" v-model="ruleForm.desc" placeholder="100字以内"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'ProjectSprint',
		data() {
			return {
				ruleForm: {
					name: '',
					date1: '',
					date2: '',
					desc: ''
				},
				rules: {
					name: [{
							required: true,
							message: '请输入项目名称',
							trigger: 'blur'
						},
						{
							max: 20,
							message: '长度在20个字符以内',
							trigger: 'blur'
						}
					],
					date1: [{
						type: 'date',
						required: true,
						message: '请选择项目开始时间',
						trigger: 'change'
					}],
					date2: [{
						type: 'date',
						required: true,
						message: '请选择项目结束时间',
						trigger: 'change'
					}],
					desc: [{
						required: false,
						message: '请填写项目描述',
						trigger: 'blur'
					}]
				},
			}
		},

		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>
</style>
