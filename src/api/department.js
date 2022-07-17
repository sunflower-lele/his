import request from '@/utils/request'

export function getDeptInfo(deptCode) {
  return request({
    baseURL: 'http://172.16.100.252',
    url: '/api/common/department/getInfo',
    method: 'get',
    params: { deptCode }
  })
}

export function getDeptsInfo(keyword) {
  return request({
    baseURL: 'http://172.16.100.252',
    url: '/api/common/department/getInfos',
    method: 'post',
    data: {
      keyword: keyword
    }
  })
}
