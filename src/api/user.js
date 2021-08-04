/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-26 3:34:58 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-26, 3:34:58 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import request from '@/utils/request'

export function reqUserInfo(data) {
  return request({
    url: '/userInfo',
    method: 'post',
    data
  })
}

export function getUsers() {
  return request({
    url: '/user/list',
    method: 'get'
  })
}

export function deleteUser(data) {
  return request({
    url: '/user/delete',
    method: 'post',
    data
  })
}

// 编辑用户
export function editUser(data) {
  return request({
    url: '/user/edit',
    method: 'post',
    data
  })
}

export function reqValidatUserID(data) {
  return request({
    url: '/user/validatUserID',
    method: 'post',
    data
  })
}

export function addUser(data) {
  return request({
    url: '/user/add',
    method: 'post',
    data
  })
}