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
          prjList: [{
            name: '项目1',
            ID: 1
          }, {
            name: '项目2',
            ID: 2
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
