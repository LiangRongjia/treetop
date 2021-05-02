<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      label-position="top"
      class="demo-ruleForm new-project-form">
      <el-form-item label="项目名称" prop="name">
        <el-input
          v-model="ruleForm.name"
          area-placeholder="不能为空"></el-input>
      </el-form-item>
      <el-form-item label="起止时间" prop="dates">
        <el-date-picker
          v-model="ruleForm.dates"
          type="daterange"
          value-format="yyyy-MM-dd"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="详细描述" prop="description">
        <el-input
          type="textarea"
          v-model="ruleForm.description"
          placeholder="不超过 100 字">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="newProject">
          创建
        </el-button>
        <el-button @click="resetForm">
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

const rules = {
  name: [{
    required: true,
    trigger: 'blur'
  }]
}
const defaultRuleForm = {
  name: '',
  dates: ['', ''],
  description: ''
}

export default {
  props: {
    userID: Number
  },
  data: function () {
    return {
      ruleForm: JSON.parse(JSON.stringify(defaultRuleForm)),
      rules
    }
  },
  // mounted: function () {
  //   this.$bus.$on('newProjectSuccess', () => {
  //     this.resetForm()
  //   })
  // },
  methods: {
    resetForm: function () {
      this.ruleForm = JSON.parse(JSON.stringify(defaultRuleForm))
    },
    newProject: function () {
      this.$bus.$emit('newProject',
        this.ruleForm.name,
        this.ruleForm.dates[0],
        this.ruleForm.dates[1],
        this.ruleForm.description,
        () => { this.resetForm() }
      )
    }
  }
}

</script>

<style scoped>
.new-project-form{
  margin: 20px 60px;
}
</style>
