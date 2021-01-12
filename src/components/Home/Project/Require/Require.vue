<template>
  <div>
    
    <el-card class="reqt_card" >
      <el-table :data="tableData" style="width: 100% ; height: 100%" @row-click="change" >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column
          prop="priority"
          label="优先级"
          align="center"
          width="150"
          :filters="[{ text: '最高', value: '最高' }, { text: '较高', value: '较高' }, { text: '普通', value: '普通' }, { text: '较低', value: '较低' }, { text: '最低', value: '最低' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag :type="pri" disable-transitions>{{scope.row.priority}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题" width="180" align="center"></el-table-column>
        <el-table-column prop="kind" label="分类" width="180" align="center"></el-table-column>
        <el-table-column prop="type" label="类型" width="180" align="center"></el-table-column>
        <el-table-column prop="sprintName" label="所属迭代" width="150" align="center"></el-table-column>
        <el-table-column
          prop="endDate"
          label="截止日期"
          sortable
          width="220px"
          header-align="center"
          align="center"
          column-key="date"
        ></el-table-column>
      </el-table>
    </el-card>

    <el-card class="form_card" v-if="isForm">
      <i class="el-icon-close" style="position:relative; left:740px; top:-10px;cursor:pointer"  @click="close"></i>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="需求标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="优先级" prop="priority">
          <el-select v-model="ruleForm.priority" placeholder="请选择优先级">
            <el-option label="最高" value="最高"></el-option>
            <el-option label="较高" value="较高"></el-option>
            <el-option label="一般" value="一般"></el-option>
            <el-option label="较低" value="较低"></el-option>
            <el-option label="最低" value="最低"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="需求分类" prop="kind" style="float:right; margin-top:-70px;margin-right:20px">
          <el-select v-model="ruleForm.kind" placeholder="请选择需求分类">
            <el-option label="技术需求" value="技术需求"></el-option>
            <el-option label="功能需求" value="功能需求"></el-option>
            <el-option label="安全需求" value="安全需求"></el-option>
            <el-option label="性能需求" value="性能需求"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="需求类型" prop="type" style="float:right;margin-right:20px">
          <el-select v-model="ruleForm.type" placeholder="请选择需求类型">
            <el-option label="新功能" value="新功能"></el-option>
            <el-option label="功能优化" value="功能优化"></el-option>
            <el-option label="交互优化" value="交互优化"></el-option>
            <el-option label="视觉优化" value="视觉优化"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="截止时间" prop="endDate" style="width:600px" required>
          <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.endDate"
                style="width: 100%;"
              ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="需求描述" >
          <el-input type="textarea" v-model="ruleForm.description" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即更改</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
export default {
  name: "ProjectSprint",
  data() {
    return {
      pri: "success",
      isForm:0,
      tableData: [
        {
          title: "测试",
          kind: "技术需求",
          type: "新功能",
          priority: "最高",
          description: "这是一个测试",
          endDate: "2021-01-13",
          sprintName: "迭代1",
        },
        {
          title: "测试",
          kind: "技术需求",
          type: "新功能",
          priority: "较高",
          description: "这是一个测试",
          endDate: "2021-01-13",
          sprintName: "迭代1",
        },
        {
          title: "测试",
          kind: "技术需求",
          type: "新功能",
          priority: "较高",
          description: "这是一个测试",
          endDate: "2021-01-13",
          sprintName: "迭代1",
        },
        {
          title: "测试",
          kind: "技术需求",
          type: "新功能",
          priority: "较高",
          description: "这是一个测试",
          endDate: "2021-01-13",
          sprintName: "迭代1",
        },
        {
          title: "测试",
          kind: "技术需求",
          type: "新功能",
          priority: "较高",
          description: "这是一个测试",
          endDate: "2021-01-13",
          sprintName: "迭代1",
        },
        {
          title: "测试",
          kind: "技术需求",
          type: "新功能",
          priority: "较高",
          description: "这是一个测试",
          endDate: "2021-01-13",
          sprintName: "迭代1",
        },
        {
          title: "测试",
          kind: "技术需求",
          type: "新功能",
          priority: "较高",
          description: "这是一个测试",
          endDate: "2021-01-13",
          sprintName: "迭代1",
        },
        {
          title: "测试",
          kind: "技术需求",
          type: "新功能",
          priority: "较高",
          description: "这是一个测试",
          endDate: "2021-01-13",
          sprintName: "迭代1",
        },
        {
          title: "测试",
          kind: "技术需求",
          type: "新功能",
          priority: "较高",
          description: "这是一个测试",
          endDate: "2021-01-13",
          sprintName: "迭代1",
        },
        {
          title: "测试",
          kind: "技术需求",
          type: "新功能",
          priority: "较高",
          description: "这是一个测试",
          endDate: "2021-01-13",
          sprintName: "迭代1",
        },
      ],
      ruleForm: {
        title: "",
        priority: "",
        kind:"",
        type:"",
        endDate:"",
        description: "",
      },
      rules: {
        title: [
          { required: true, message: "请输入需求标题", trigger: "blur" },
        ],
        priority: [
          { required: true, message: "请选择优先级", trigger: "change" },
        ],
        kind: [
          {
            required: true,
            message: "请选择一个需求分类",
            trigger: "change",
          },
        ],
        type: [
          {
            required: true,
            message: "请选择一个需求类型",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        endDate: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    change() {
      this.isForm=1;
    },
    close(){
      this.isForm=0;
    },
    // tableRowClassName({row, rowIndex}) {
    //   if (rowIndex === 1) {
    //     return 'warning-row';
    //   } else if (rowIndex === 3) {
    //     return 'success-row';
    //   }
    //   return '';
    // },
    // formatter(row, column) {
    //   return row.address;
    // },
    filterTag(value, row) {
      return row.tag === value;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
.reqt_card {
  margin: 0px 24px 24px 24px;
  overflow-y: auto;
  height: 640px;
}
.form_card {
  margin: 0px 24px 24px 24px;
  width: 65%;
  height: 50%;
  margin:auto;
}
</style>
