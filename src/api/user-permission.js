import request from '@/utils/request'

export function getRoles() {
  return request({
    url: '/api/inpatient/escort/queryHelperInfo',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/api/inpatient/escort/queryHelperInfo',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: '/api/inpatient/escort/queryHelperInfo',
    method: 'post',
    data: {
      id: id,
      param: data
    }
  })
}

export function deleteRole(id) {
  return request({
    url: '/api/inpatient/escort/queryHelperInfo',
    method: 'delete'
  })
}
