<template>
  <div>
    <el-card class="my-info__card">
      <div slot="header">
        <span>团队成员</span>
        <el-button
          class="header-button"
          type="text"
          @click="invitingDialogVisible=true"
          style="float: right; padding: 3px 0">
          邀请
        </el-button>
        <invite-dialog
          :visible="invitingDialogVisible"
          :closeDialog="()=>invitingDialogVisible=false"
          :projectID="projectID">
        </invite-dialog>
      </div>
      <el-card class="list" shadow="never">
        <el-table :data="members" stripe>
          <el-table-column prop="ID" label="ID" align="center"></el-table-column>
          <el-table-column prop="name" label="姓名" align="center"></el-table-column>
        </el-table>
      </el-card>
    </el-card>
  </div>
</template>

<script>

import InviteDialog from './InviteDialog'

export default {
  components: {
    'invite-dialog': InviteDialog
  },
  props: {
    members: Array,
    projectID: Number
  },
  data: function () {
    return {
      invitingDialogVisible: false
    }
  }
}
</script>

<style scoped>
  .my-info__card {
    margin: 24px;
    height: max-content;
  }

  .card-content {
    display: flex;
  }

  .myInfo__card h1 {
    font-size: 18px;
  }

  .myInfo__card p {
    padding: 12px 0px;
  }

  .card-content>* {
    flex-grow: 1;
    flex-shrink: 1;
    margin: 0px 12px;
  }

  .my-info__edit-dialog h1 {
    font-size: 18px;
    padding: 12px 0px;
  }

  .list {
    flex-shrink: 1;
    flex-grow: 1;
  }
</style>
