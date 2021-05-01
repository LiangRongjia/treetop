<template>
  <el-dialog
    title="修改项目信息"
    :visible.sync="visible"
    width="50%"
    :modal-append-to-body="false"
    :show-close="false">
    <el-form :model="form">
      <el-form-item label="Name" :label-width="formLabelWidth">
        <el-input
          v-model="form.name"
          autocomplete="off"
          style="width: 65%;">
        </el-input>
      </el-form-item>
      <el-form-item label="Start" :label-width="formLabelWidth">
        <el-date-picker
          type="date"
          placeholder="Choose start date"
          v-model="form.start"
          value-format="yyyy-MM-dd"
          style="width: 65%;">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="End" :label-width="formLabelWidth">
        <el-date-picker
          type="date"
          placeholder="Choose end date"
          v-model="form.end"
          value-format="yyyy-MM-dd"
          style="width: 65%;">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="Status" :label-width="formLabelWidth">
        <el-select v-model="form.status" placeholder="Choose status">
          <el-option label="Pending" value="Pending"></el-option>
          <el-option label="In progress" value="In progress"></el-option>
          <el-option label="Completed" value="Completed"></el-option>
          <el-option label="Shilved" value="Shilved"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Description" :label-width="formLabelWidth">
        <el-input
          type="textarea"
          v-model="form.description"
          placeholder="No longer than 100 characters"
          style="width: 65%;">
        </el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">
        取消
      </el-button>
      <el-button type="primary" @click="updateInfo">
        保存
      </el-button>
    </span>
  </el-dialog>
</template>

<script>

export default {
  props: {
    visible: Boolean,
    name: String,
    status: String,
    startDate: String,
    endDate: String,
    description: String,
    closeDialog: Function
  },
  data: function () {
    return {
      form: {
        name: this.name,
        status: this.status,
        startDate: this.startDate,
        endDate: this.endDate,
        description: this.description
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    updateInfo: function () {
      this.$bus.$emit(
        'updateInfo',
        this.form.name,
        this.form.status,
        this.form.startDate,
        this.form.endDate,
        this.form.description
      )
      this.closeDialog()
    }
  }
}

</script>

<style scoped>

</style>
