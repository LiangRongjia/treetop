<template>
  <div>
<!-- 	  <el-card>
		  <el-button type="text" id="new_task"><i class="el-icon-circle-plus-outline"></i>新建</el-button>
	  </el-card> -->
	  <pregress-top class="progress_card" />
	  <progress-list class="progress_card" />
  </div>
</template>

<script>
import progresslist from './progresslist.vue'
import progressTop from './progressTop.vue'
export default{
  name: 'ProjectProgress',
    components: {
    'progress-list': progresslist,
	'progress-top': progressTop,
  },
  data () {
    return {
	  tab:"alltask",
    }
  }
}
</script>

<style scoped>
.progress_card{
  margin: 0px 24px 24px 24px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}

#tasktop_underline{
	
}

</style>
