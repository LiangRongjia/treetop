<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="12">
				<el-card>
					<div slot="header">Progress</div>
					<el-row :gutter="20">
						<el-col :span="12">
							<el-progress type="dashboard" :percentage="percentage" :color="colors" style="position: relative; left: 25%;"></el-progress>
						</el-col>
						<el-col :span="10" :offset="1">
							<p>All: {{count}}</p><br />
							<p>Pending: {{nostarting}}</p><br />
							<p>In progress: {{processing}}</p><br />
							<p>Completed: {{already}}</p><br />
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
	export default {
		props: [
			'count',
			'already',
			'processing',
			'nostarting',
			'percentage'
		],
		data() {
			return {
				count: 0,
				already: 0,
				processing: 0,
				nostarting: 0,
				percentage: 0,
				colors: [{
						color: '#f56c6c',
						percentage: 20
					},
					{
						color: '#e6a23c',
						percentage: 40
					},
					{
						color: '#5cb87a',
						percentage: 60
					},
					{
						color: '#1989fa',
						percentage: 80
					},
					{
						color: '#6f7ad3',
						percentage: 100
					}
				]
			};
		},
		created:function(){
			//this.calculate();
		},
		methods: {
			calculate() {
				this.axios.get("http://39.97.175.119:8801/task/getTaskListByPid?projectid=" + this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].ID)
					.then((response) => {
						if (response.data.message == "成功") {
							console.log('342352356');
							var taskList = response.data.data.task;
							console.log(taskList);
							this.count = 0;
							this.already = 0;
							this.processing = 0;
							this.nostarting = 0;
							for (let task of taskList) {
								this.count++;
								if (task.state == "已完成") this.already++;
								else if (task.state == "未开始") this.nostarting++;
								else this.processing++;
							}
							this.percentage = this.count / this.already;
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},

			increase() {
				this.percentage += 10;
				if (this.percentage > 100) {
					this.percentage = 100;
				}
			},
			decrease() {
				this.percentage -= 10;
				if (this.percentage < 0) {
					this.percentage = 0;
				}
			}
		}
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
