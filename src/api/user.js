import request from '@/utils/request'

export function login(data) {
  return request({
    baseURL: 'http://172.16.100.252',
    url: '/api/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    baseURL: 'http://172.16.100.252',
    url: '/api/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    baseURL: 'http://172.16.100.252',
    url: '/api/user/logout',
    method: 'post'
  })
}
