<template>
  <el-card>
    <div slot="header">
      <span>{{title}}</span>
    </div>
    <div class="content">
      <el-table :data="data" stripe class="table">
        <el-table-column
          v-for="item in fields"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label">
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>

export default {
  props: {
    title: String,
    data: Array,
    fields: Array
  }
}
</script>

<style scoped>
.header-button{
  float: right;
  margin-top: -8px;
  margin-right: 12px;
  padding: 10px;
}
.content{
  display: flex;
}
.content>*{
  margin: 0px 12px;
}
.chart{
  flex-basis: 200px;
  flex-shrink: 0;
}
.list{
  flex-shrink: 1;
  flex-grow: 1;
}
.table{
  max-height: 360px;
  overflow: auto;
}
</style>
