<template>
	<div>
		<el-card>
			<div slot="header">Sprint</div>
			<div class="card-content">
				<el-card shadow="never">
					<div slot="header">Current sprint</div>
					<p>{{num}}</p><br />
				</el-card>
				<el-card shadow="never">
					<div slot="header">Current sprint status</div>
					<p>{{state}}</p>
				</el-card>
				<el-card shadow="never">
					<div slot="header">Before the end of current iteration</div>
					<p>{{time}}</p>
				</el-card>
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				num: 0,
				state: '',
				time: 0,
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
