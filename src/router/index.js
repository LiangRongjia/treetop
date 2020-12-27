import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/Login'
import MyTask from '@/components/MyTask'
import MyMessage from '@/components/MyMessage'

import Project from '@/components/Project/Project'
// import ProjectBasic from '@/components/Project/Basic'
// import ProjectSprint from '@/components/Project/Sprint'
// import ProjectDefect from '@/components/Project/Defect'
// import ProjectRequire from '@/components/Project/Require'
// import ProjectProgress from '@/components/Project/Progress'

// 解决路由导航冗余报错(路由重复)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

/*
 * 【路径说明】
 * 路经形如 [域名]/[用户名]/[项目名]/[标签页(需求、任务等)]
 * 例如： localhost:1080/liangrongjia/project1/require
 * 以组件结构定义路径
 * ajax 请求路径与此无关，该路径完全为前端服务
 * 【注意将来变更】
 * 目前 My Task 和 My Message 两个页面的导航是放在 /[项目名] 这里，是如下这么访问的：
 * localhost:1080/liangrongjia/my-task/require
 * 这导致项目名不能创建为 my-task ，否则会有冲突
 * 参考 Github 的设计，将改为如下路径：
 * localhost:1080/liangrongjia?tabs=my-task
 */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/:userName',
      component: Home,
      children: [
        {
          path: 'my-task',
          component: MyTask
        },
        {
          path: 'my-message',
          component: MyMessage
        },
        {
          path: ':project',
          component: Project
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
