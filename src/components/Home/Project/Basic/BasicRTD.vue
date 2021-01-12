<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="12">
				<el-card>
					<div slot="header">Progress</div>
					<el-row :gutter="20">
						<el-col :span="12">
							<el-card class="chart" shadow="never">
								<div>[EChart饼图，需求、任务、缺陷]</div>
							</el-card>
						</el-col>
						<el-col :span="8" :offset="2">
							<p>All : {{name}}</p><br />
							<p>Pending : {{name}}</p><br />
							<p>In progress : {{start}}</p><br />
							<p>Completed : {{start}}</p><br />
							<p>Delay : {{end}}</p>
						</el-col>
					</el-row>
				</el-card>
			</el-col>
			<el-col :span="12">
				<el-card>
					<div slot="header">Project distribution</div>
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
