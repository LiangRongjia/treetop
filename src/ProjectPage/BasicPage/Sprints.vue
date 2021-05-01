<template>
  <div>
    <el-card>
      <div slot="header">迭代</div>
      <div class="card-content">
        <el-card shadow="never">
          <div slot="header">当前迭代</div>
          <p>{{title}}</p><br />
        </el-card>
        <el-card shadow="never">
          <div slot="header">状态</div>
          <p>{{status}}</p>
        </el-card>
        <el-card shadow="never">
          <div slot="header">截止日期</div>
          <p>{{endDate}}</p>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  props: {
    title: String,
    endDate: String,
    status: String
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
