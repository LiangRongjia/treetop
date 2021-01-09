<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="12">
				<el-card>
					<div slot="header">项目进度</div>
					<el-row :gutter="20">
						<el-col :span="12">
							<el-card class="chart" shadow="never">
								<div>[EChart饼图，需求、任务、缺陷]</div>
							</el-card>
						</el-col>
						<el-col :span="8" :offset="2">
							<p>事务总数 : {{name}}</p><br />
							<p>未开始 : {{name}}</p><br />
							<p>进行中 : {{start}}</p><br />
							<p>已完成 : {{start}}</p><br />
							<p>延期 : {{end}}</p>
						</el-col>
					</el-row>
				</el-card>
			</el-col>
			<el-col :span="12">
				<el-card>
					<div slot="header">事务分布</div>
					<el-card class="chart" shadow="never">
						<div>[EChart饼图，需求、任务、缺陷]</div>
					</el-card>
				</el-card>
			</el-col>
		</el-row>
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
