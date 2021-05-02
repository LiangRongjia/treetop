<template>
  <aside>
    <div class="user-info">
      <div>
        <el-avatar :src="user.avatar"></el-avatar>
        <p class="user-info__name">{{user.name}}</p>
      </div>
    </div>
    <el-menu
      ref="home-menu"
      class="menu"
      default-active="my-jobs"
      :default-openeds="['my-projects']">
      <el-menu-item index="my-info" @click="$bus.$emit('toPage','my-info-page')">
        <span>我的资料</span>
      </el-menu-item>
      <el-menu-item index="my-jobs" @click="$bus.$emit('toPage','my-jobs-page')">
        <span>我的工作</span>
      </el-menu-item>
      <el-submenu ref="project-menu" index="my-projects">
        <template slot="title">
          <span>我的项目</span>
        </template>
        <el-menu-item
          v-for="item in projects"
          :index="`project${item.ID}`"
          :key="item.ID"
          @click="$bus.$emit('toProject', item.ID)">
          {{item.name}}
        </el-menu-item>
      </el-submenu>
      <el-menu-item
        :index="'new-project'"
        :key="'new-project'"
        @click="$bus.$emit('toPage', 'new-project-page')">
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
    projects: Array
  },
  data: function () {
    return {

    }
  },
  created: function () {
    this.acceptList()
  },
  mounted: function () {
    // setInterval(() => console.log(this.projects), 1000)
  },
  methods: {
    acceptList: function () {
      this.$bus.$on('add', (message) => {
        this.projectsList = this._GLOBAL.ProjectList
      })
    }
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

  .menu {
    border: none;
  }
</style>
