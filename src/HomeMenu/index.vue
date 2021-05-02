<template>
  <aside>
    <div class="user-info">
      <div>
        <el-avatar :src="user.avatar"></el-avatar>
        <p class="user-info__name">{{user.name}}</p>
      </div>
    </div>
    <el-menu
      class="menu"
      background-color="#f7f7f7"
      default-active="my-jobs"
      :default-openeds="['my-projects']">
      <el-menu-item index="my-info" @click="toPage('my-info-page')">
        <span>我的资料</span>
      </el-menu-item>
      <el-menu-item index="my-jobs" @click="toPage('my-jobs-page')">
        <span>我的工作</span>
      </el-menu-item>
      <el-submenu
        ref="project-menu"
        index="my-projects">
        <template slot="title">
          <span>我的项目</span>
        </template>
        <el-menu-item
          v-for="item in projects"
          :index="`project${item.ID}`"
          :key="item.ID"
          @click="toProject(item.ID)">
          {{item.name}}
        </el-menu-item>
      </el-submenu>
      <el-menu-item
        :index="'new-project'"
        :key="'new-project'"
        @click="toPage('new-project-page')">
        + 创建项目
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<script>

export default {
  name: 'HomeMenu',
  props: {
    user: Object,
    projects: Array,
    toPage: Function,
    toProject: Function
  }
}

</script>

<style scoped>
  .user-info {
    padding: 24px;
    display: flex;
    flex-direction: column;
  }

  .user-info>div {
    display: flex;
    align-items: center;
  }

  .user-info__name {
    margin-left: 24px;
  }

  .menu{
    border: none;
  }
</style>
