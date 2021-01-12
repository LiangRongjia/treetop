<template>
	<div>
		<basic-info class="basic__card" :name="basic.name" :host_name="basic.host_name" :start="basic.start" :end="basic.end" :description="basic.description" :state="basic.state"/>
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
					name: this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].name,
					host_name: this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].host_ID,
					description: this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].description,
					start: this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].startDate,
					end: this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].endDate,
					state: this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].state,
				},
			}
		},
		watch: {
			// 若 projectID 变更，更新页面
			projectID(to, from) {
				this.basic.name = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].name;
				this.basic.host_name = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].host_ID;
				this.basic.description = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].description;
				this.basic.start = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].startDate;
				this.basic.end = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].endDate;
				this.basic.state = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].state;
			}
		},
		created:function(){
			this.func();
			
		},
		methods: {
			func() {
				this.basic.name = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].name;
				this.basic.host_name = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].host_ID;
				this.basic.description = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].description;
				this.basic.start = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].startDate;
				this.basic.end = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].endDate;
				this.basic.state = this._GLOBAL.ProjectList[this._GLOBAL.projectIndex].state;
			}
			
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
