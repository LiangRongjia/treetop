<template>
	<el-card>
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
	</el-card>
</template>

<script>
	export default {
		name: 'SprintInfo',
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
</style>
