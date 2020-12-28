<template>
  <el-card>
    <div slot="header">Sprint Info</div>
    <div class="card-content">
      <el-card shadow="never">
        <div slot="header">Sprint</div>
        <p>Name : {{name}}</p><br />
        <p>Start : {{start}}</p><br />
        <p>End : {{end}}</p>
      </el-card>
      <el-card shadow="never">
        <div slot="header">Description</div>
        <p>{{description}}</p>
      </el-card>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'SprintInfo',
  props: [
    'name',
    'start',
    'end',
    'description'
  ]
}
</script>

<style scoped>
.card-content{
  display: flex;
}
.card-content>*{
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0px 12px;
}
</style>
