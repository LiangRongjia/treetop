<template>
	<div>
		<!-- <el-select class="sprint__card" v-model="sprintIndex">
			<el-option v-for="(item, index) in sprintsList" :key="index" :label="index + 1 + ' : ' + item.name" :value="index">
			</el-option>
		</el-select> -->
		<sprint-info class="sprint__card" :name="sprint.name" :start="sprint.start" :end="sprint.end" :description="sprint.description" />
		<basic-sprint class="sprint__card" />
		<basic-rtd class="sprint__card" />
	</div>
</template>
<script>
	import SprintInfo from './BasicInfo.vue'
	import BasicSprint from './BasicSprint.vue'
	import BasicRTD from './BasicRTD.vue'
	/* 该组件依据当前项目名，获取所有迭代信息
	 * 当前项目名从路径(或全局变量？])获取
	 */
	export default {
		name: 'ProjectSprint',
		components: {
			'sprint-info': SprintInfo,
			'basic-sprint': BasicSprint,
			'basic-rtd': BasicRTD,
		},
		props: [
			// projectID 依赖于组件参数 props
			'projectID'
		],
		data() {
			return {
				sprintsList: [{
						ID: 1,
						name: 'firstSprint'
					},
					{
						ID: 2,
						name: 'secondSprint'
					}
				],
				sprintIndex: 0,
				sprint: {
					ID: 1,
					name: 'firstSprint',
					description: 'firstSprint\'s description',
					start: '2020/12/27',
					end: '2020/12/28'
				},
				requiresFields: ['name', 'state', 'description'],
				tasksFields: ['name', 'state', 'host', 'description'],
				defectsFields: ['name', 'state', 'description'],
				requires: [{
						ID: 1,
						name: 'require1',
						state: 'done',
						desciption: 'require1 description'
					},
					{
						ID: 3,
						name: 'require3',
						state: 'done',
						desciption: 'require3 description'
					}
				],
				tasks: [{
						ID: 1,
						name: 'task1',
						state: 'done',
						host: 'liangrongjia',
						desciption: 'task1 description'
					},
					{
						ID: 3,
						name: 'task2',
						state: 'done',
						host: 'liangrongjia',
						desciption: 'task2 description'
					}
				],
				defects: [{
					ID: 3,
					name: 'defect2',
					state: 'done',
					desciption: 'defect2 description'
				}]
			}
		},
		watch: {
			// 若 projectID 变更，更新页面
			projectID(to, from) {
				// update
				this.sprintList = this.sprintList
				this.sprintIndex = 0
				this.sprint = this.sprint
				this.requires = this.requires
				this.tasks = this.tasks
				this.defects = this.defects
			}
		},
		methods: {
			addRequires() {
				this.$alert('Add a require', 'dialog', {
					confirmButtonText: 'OK'
				})
			},
			addTasks() {
				this.$alert('Add a task', 'dialog', {
					confirmButtonText: 'OK'
				})
			},
			addDefects() {
				this.$alert('Add a defect', 'dialog', {
					confirmButtonText: 'OK'
				})
			}
		}
	}
</script>

<style>
	.sprint__card {
		margin: 0px 24px 24px 24px;
	}
</style>
