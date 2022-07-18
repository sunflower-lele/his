import request from '@/utils/request'

export function login(data) {
  return request({
    baseURL: 'http://172.16.100.252',
    url: '/api/user/signIn',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    baseURL: 'http://172.16.100.252',
    url: '/api/user/getInfo',
    method: 'get'
  })
}

export function logout() {
  return request({
    baseURL: 'http://172.16.100.252',
    url: '/api/user/signOut',
    method: 'post'
  })
}
