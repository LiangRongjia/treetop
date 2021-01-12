<template>
	<div>
		<el-card>
			<div slot="header">
				Basic Info
				<el-button :v-if="isHost" @click="dialogVisible = true" style="float: right; padding: 3px 0" type="text">Modify</el-button>
			</div>
			<div class="card-content">
				<el-card shadow="never">
					<div slot="header">Basic</div>
					<p>Name : {{name}}</p><br />
					<p>Leader : {{host_name}}</p><br />
					<p>Start : {{start}}</p><br />
					<p>End : {{end}}</p><br />
					<p>Current Status : {{state}}</p>
				</el-card>
				<el-card shadow="never">
					<div slot="header">Description</div>
					<p>{{description}}</p>
				</el-card>
			</div>
		</el-card>
		<el-dialog title="Modify basic info" :visible.sync="dialogVisible" width="50%" :modal-append-to-body="false">
			<el-form :model="form">
				<el-form-item label="Name" :label-width="formLabelWidth">
					<el-input v-model="form.name" autocomplete="off" style="width: 65%;"></el-input>
				</el-form-item>
				<el-form-item label="Start" :label-width="formLabelWidth">
					<el-date-picker type="date" placeholder="Choose start date" v-model="form.date1" value-format="yyyy-MM-dd" style="width: 65%;"></el-date-picker>
				</el-form-item>
				<el-form-item label="End" :label-width="formLabelWidth">
					<el-date-picker type="date" placeholder="Choose end date" v-model="form.date2" value-format="yyyy-MM-dd" style="width: 65%;"></el-date-picker>
				</el-form-item>
				<el-form-item label="Status" :label-width="formLabelWidth">
					<el-select v-model="form.status" placeholder="Choose status">
						<el-option label="Preparing" value="PR"></el-option>
						<el-option label="In progress" value="ST"></el-option>
						<el-option label="Completed" value="ED"></el-option>
						<el-option label="Shilved" value="PS"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="Description" :label-width="formLabelWidth">
					<el-input type="textarea" v-model="form.desc" placeholder="No longer than 100 characters" style="width: 65%;"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">Cancle</el-button>
				<el-button type="primary" @click="dialogVisible = false">Save</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'BasicInfo',
		props: [
			'name',
			'host_name',
			'start',
			'end',
			'description'
		],
		data() {
			return {
				isHost: true,
				dialogVisible: false,
				form: {
					name: '',
					status: '',
					date1: '',
					date2: '',
					desc: ''
				},
				formLabelWidth: '120px',
			}
		},
		methods: {
			handleClose(done) {
				this.$confirm('Confirm?')
					.then(_ => {
						done();
					})
					.catch(_ => {});
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
