<template>
	<div>
		<el-card>
			<div slot="header">迭代概览</div>
			<div class="card-content">
				<el-card shadow="never">
					<div slot="header">当前迭代次数</div>
					<p>{{num}}</p><br />
				</el-card>
				<el-card shadow="never">
					<div slot="header">当前迭代状态</div>
					<p>{{state}}</p>
				</el-card>
				<el-card shadow="never">
					<div slot="header">当前迭代倒计时</div>
					<p>{{time}}</p>
				</el-card>
			</div>
		</el-card>
	</div>
</template>

<script>
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
