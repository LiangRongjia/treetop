<template>
  <div>
	  <el-row>
		  <el-button type="text" id="new_task"><i class="el-icon-circle-plus-outline"></i>新建</el-button>
	  </el-row>
	  <progress-list class="progress_card" />
	  <!-- <el-tabs id="task_list" v-model="tab" type="border-card">
	    <el-tab-pane label="全部任务" name="alltask">
	    </el-tab-pane>
		<el-tab-pane label="我创建的任务" name="mytask">
			
		</el-tab-pane>
		 
	  </el-tabs> -->
	  
  </div>
</template>

<script>
import progresslist from './progresslist.vue'
export default{
  name: 'ProjectProgress',
    components: {
    'progress-list': progresslist,
  },
  data () {
    return {
	  tab:"alltask",
    }
  }
}
</script>

<style>
#task_list{}
.progress_card{
  margin: 0px 24px 24px 24px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}
#new_task{
	margin-left: 1100px;
	padding-top: 0px;
}
#tasktop_underline{
	
}

</style>
