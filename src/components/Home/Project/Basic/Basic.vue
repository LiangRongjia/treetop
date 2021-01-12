<template>
	<div>
		<basic-info class="basic__card" :name="basic.name" :host_name="basic.host_name" :start="basic.start" :end="basic.end" :description="basic.description" />
		<basic-sprint class="basic__card" />
		<basic-rtd class="basic__card" />
	</div>
</template>
<script>
	import BasicInfo from './BasicInfo.vue'
	import BasicSprint from './BasicSprint.vue'
	import BasicRTD from './BasicRTD.vue'
	/* 该组件依据当前项目名，获取所有迭代信息
	 * 当前项目名从路径(或全局变量？])获取
	 */
	export default {
		name: 'Project',
		components: {
			'basic-info': BasicInfo,
			'basic-sprint': BasicSprint,
			'basic-rtd': BasicRTD,
		},
		props: [
			// projectID 依赖于组件参数 props
			'projectID'
		],
		data() {
			return {
				basic: {
					ID: 1,
					name: '测试项目',
					host_name: '项目负责人',
					description: '用于添加各类测试',
					start: '2020/12/27',
					end: '2020/12/28'
				},
			}
		},
		watch: {
			// 若 projectID 变更，更新页面
			projectID(to, from) {
				// update
				
			}
		},
		methods: {
// 			addRequires() {
// 				this.$alert('Add a require', 'dialog', {
// 					confirmButtonText: 'OK'
// 				})
// 			},
// 			addTasks() {
// 				this.$alert('Add a task', 'dialog', {
// 					confirmButtonText: 'OK'
// 				})
// 			},
// 			addDefects() {
// 				this.$alert('Add a defect', 'dialog', {
// 					confirmButtonText: 'OK'
// 				})
// 			}
		}
	}
</script>

<style>
	.basic__card {
		margin: 0px 24px 24px 24px;
	}
</style>
