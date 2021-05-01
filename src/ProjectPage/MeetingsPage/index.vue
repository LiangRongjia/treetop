<template>
  <div>meetings
  </div>
</template>
<script>
export default {
  props: [],
  data: function () {
    return {

    }
  }
}
// <el-dialog class="sprint__meeting-dialog" :title="currentMeeting.title"
//   :visible.sync="isViewMeeting"
//   :modal="false">
//   <h1>Type</h1>
//   <el-input v-model="currentMeeting.type" placeholder="请输入内容"></el-input>
//   <h1>Date</h1>
//   <el-date-picker v-model="currentMeeting.date" type="date"/>
//   <h1>Description</h1>
//   <el-input v-model="currentMeeting.description" type="textarea" placeholder="请输入内容"></el-input>
//   <h1>Attachment</h1>
//   <p>{{currentMeeting.attachment}}</p>
//   <div slot="footer" class="dialog-footer">
//     <el-button @click="isViewMeeting = false">取消</el-button>
//     <el-button type="primary" @click="isViewMeeting = false">确定</el-button>
//   </div>
// </el-dialog>

// <el-dialog
//   class="sprint__add-meeting-dialog"
//   title="Add Meeting"
//   :visible.sync="isAddMeeting"
//   :modal="false">
//   <h1>类型</h1>
//   <el-input v-model="newMeeting.type"></el-input>
//   <h1>日期</h1>
//   <el-date-picker v-model="newMeeting.date" type="date"/>
//   <h1>描述</h1>
//   <el-input v-model="newMeeting.description" type="textarea"></el-input>
//   <h1>附件</h1>
//   <p>{{newMeeting.attachment}}</p>
//   <div slot="footer" class="dialog-footer">
//     <el-button @click="isAddMeeting = false">取消</el-button>
//     <el-button type="primary" @click="isAddMeeting = false">确定</el-button>
//   </div>
// </el-dialog>
</script>
