// 抽取接口，先抽取当前需要的接口，以后再改为数据集中管理需要的接口

import axios from 'axios'

const baseURL = 'http://39.97.175.119:8801'

export const login = (userName, password) => {
  // return axios.get(
  //   `${baseURL}/user/login`,
  //   {
  //     params: {
  //       name: userName,
  //       password: password
  //     }
  //   }
  // )
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        message: '成功',
        data: {
          user: {
            ID: 1,
            name: 'liangrongjia'
          }
        }
      }
    })
  })
}
export const getProjectsByUserID = (userID) => {
  // return axios.get(
  //   `${baseURL}/project/getPrjListByUID`,
  //   {
  //     params: {
  //       UID: userID
  //     }
  //   }
  // )
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        message: '成功',
        data: {
          projects: [{
            name: '项目1',
            ID: 1,
            sprints: [
              { ID: 2, title: 'sprint1', description: 'greht', startDate: 'f', endDate: 'f' },
              { ID: 3, title: 'sprint2', description: 'gahsr', startDate: 'f', endDate: 'f' }
            ],
            requires: [{ title: '', type: '', kind: '', priority: '', description: '', endDate: '', stitle: '', state: '' }],
            tasks: [{ title: '', state: '', username: '', startDate: '', endDate: '', priority: '', description: '' }],
            defects: [{ title: '', type: '', state: '', endDate: '', description: '' }],
            meetings: [
              { ID: 1, type: 'Require', description: 'Description of meetings 1', date: '2020-12-09', attachment: 'attachment' },
              { ID: 2, type: 'Require', description: 'Description of meetings 2', date: '2020-12-09', attachment: 'attachment' }
            ]
          }, {
            name: '项目2',
            ID: 2,
            sprints: [{
              ID: 2,
              projectID: 2,
              index: 0, // 项目内的次序
              title: 'sprint1',
              description: 'greht',
              startDate: 'fff',
              endDate: 'ffff'
            }, {
              ID: 3,
              projectID: 2,
              index: 1, // 项目内的次序
              title: 'sprint2',
              description: 'gahsr',
              startDate: 'f',
              endDate: 'f'
            }],
            requires: [{
              ID: 1,
              title: '标题',
              type: '类型',
              priority: '优先级',
              description: '描述',
              endDate: '截止日期',
              sprintID: 2,
              projectID: 2,
              state: '进行中'
            }],
            tasks: [{
              ID: 1,
              title: '标题',
              sprintID: 2,
              projectID: 2,
              state: '进行中',
              hostName: 'liangorngjia',
              hostID: 1,
              startDate: '2020',
              endDate: '2020',
              priority: '优先级',
              description: '描述'
            }],
            defects: [{
              ID: 1,
              title: '标题',
              sprintID: 2,
              projectID: 2,
              type: '类型',
              state: '状态',
              endDate: '2021',
              description: '描述'
            }],
            meetings: [{
              ID: 1,
              title: '需求评审',
              type: 'Require',
              sprintID: 2,
              projectID: 2,
              index: 0, // 迭代内的次序
              description: 'Description of meetings 1',
              date: '2020-12-09',
              attachments: 'attachment'
            }]
          }]
        }
      }
    })
  })
}
export const register = (userName, password) => {
  return axios.post(
    `${baseURL}user/register`,
    {
      name: userName,
      password: password
    },
    {
      emulateJSON: true
    }
  )
}
export const getMemberListByPID = (projectID) => {
  return axios.get(`${baseURL}/project/getMemberListByPID`, {
    params: {
      ID: projectID
    }
  })
}
export const addMember = (PID, UID) => {
  return axios.get(`${baseURL}/project/addMember`, {
    params: {
      PID,
      UID
    }
  })
}
export const getSpListByPID = (projectID) => {
  return this.axios.post(`${baseURL}/sprint/getSpListByPID?ID=${projectID}`)
}
