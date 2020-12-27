<template>
  <div>
    <el-select class="sprint__card" v-model="sprintID">
      <el-option
        v-for="item in sprints"
        :key="item.ID"
        :label="item.ID + ': ' + item.name"
        :value="item.ID">
      </el-option>
    </el-select>
    <el-card class="sprint__card">
      <div slot="header">Sprint Info</div>
      <div class="sprint-card-sprint-info__content">
        <el-card shadow="never">
          <div slot="header">Sprint</div>
          <p>Name : {{sprints[sprintID - 1].name}}</p><br />
          <p>ID : {{sprints[sprintID - 1].ID}}</p><br />
          <p>Start : {{sprints[sprintID - 1].start}}</p><br />
          <p>End : {{sprints[sprintID - 1].end}}</p>
        </el-card>
        <el-card shadow="never">
          <div slot="header">Description</div>
          <p>{{sprints[sprintID - 1].description}}</p>
        </el-card>
      </div>
    </el-card>
    <el-card class="sprint__card">
      <div slot="header">Require</div>
      <div class="sprint-card-require__content">
        <el-card class="sprint-card-require__count" shadow="never">
          <p>{{sprints[sprintID - 1].require.length}}</p>
          <div>[EChart]</div>
        </el-card>
        <el-card class="sprint-card-require__list" shadow="never">
          <el-table :data="sprints[sprintID - 1].require" stripe>
            <el-table-column prop="name" label="Name"></el-table-column>
            <el-table-column prop="ID" label="ID"></el-table-column>
            <el-table-column prop="State" label="State"></el-table-column>
            <el-table-column prop="description" label="Description"></el-table-column>
          </el-table>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script>
export default{
  name: 'ProjectSprint',
  data () {
    return {
      sprints: [
        {
          ID: 1,
          name: 'firstSprint',
          description: 'firstSprint\'s description',
          start: '2020/12/27',
          end: '2020/12/28',
          require: [
            {
              ID: 1,
              name: 'require1',
              state: 'done',
              desciption: 'require1 description'
            },
            {
              ID: 3,
              name: 'require3',
              state: 'done',
              desciption: 'require3 description'
            }
          ]
        },
        {
          ID: 2,
          name: 'secondSprint',
          description: 'secondSprint\'s description',
          start: '2020/12/28',
          end: '2020/12/29',
          require: [
            {
              ID: 2,
              name: 'require2',
              state: 'done',
              desciption: 'require2 description'
            }
          ]
        }
      ],
      sprintID: 1
    }
  }
}
</script>

<style>
.sprint__card{
  margin: 0px 24px 24px 24px;
}
.sprint-card-sprint-info__content{
  display: flex;
}
.sprint-card-sprint-info__content>div{
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0px 12px;
}
.sprint-card-require__content{
  display: flex;
}
.sprint-card-require__content>div{
  margin: 0px 12px;
}
.sprint-card-require__count{
  flex-basis: 150px;
  text-align: center;
  font-size: 40px;
}
.sprint-card-require__count{
  flex-shrink: 1;
  flex-grow: 1;
}
</style>
