<template>
	<div>
		<el-card class="task_nexttop">
			<el-col :span="1" ><i class="el-icon-setting"></i></el-col>
			<el-col :span="3">状态</el-col>
			<el-col :span="7">标题</el-col>
			<el-col :span="2">负责人</el-col>
			<el-col :span="2">优先级</el-col>
			<el-col :span="3">所属迭代</el-col>
			<el-col :span="2">创建人</el-col>
			<el-col :span="4">创建时间</el-col>
			<el-row></el-row>
		</el-card>
	</div>
	<!-- <el-card>
		<div slot="header">项目信息</div>
		<div class="card-content">
			<el-card shadow="never">
				<div slot="header">基本信息</div>
				<p>项目名称 : {{name}}</p><br />
				<p>项目负责人 : {{name}}</p><br />
				<p>项目开始时间 : {{start}}</p><br />
				<p>项目结束时间 : {{end}}</p>
			</el-card>
			<el-card shadow="never">
				<div slot="header">项目描述</div>
				<p>{{description}}</p>
			</el-card>
		</div>
	</el-card> -->
</template>

<script>
	export default {
		name: 'progresslist',
		props: [
			'name',
			'start',
			'end',
			'description'
		]
	}
</script>

<style scoped>
	.card-content {
		display: flex;
	}

	.card-content>* {
		flex-grow: 1;
		flex-shrink: 1;
		margin: 0px 12px;
	}
	.task_nexttop{
		text-align: center;
	}
</style>
