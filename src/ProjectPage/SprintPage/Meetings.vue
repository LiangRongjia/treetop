<template>
  <el-card>
    <div slot="header">
      <span>Meetings</span>
    </div>
    <el-table :data="data" stripe>
      <el-table-column
        v-for="item in fields"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label">
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>

export default {
  props: {
    data: Array,
    fields: Array
  },
  data: function () {
    return { }
  },
  methods: { }
}
</script>

<style scoped>
.sprint__meeting-dialog h1{
  font-size: 18px;
  padding: 12px 0px;
}
.header-button{
  float: right;
  margin-top: -8px;
  margin-right: 12px;
  padding: 10px;
}
</style>
