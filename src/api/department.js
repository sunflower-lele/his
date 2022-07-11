import request from '@/utils/request'

export function getDeptInfo(deptCode) {
  return request({
    url: '/api/common/department/getDeptInfo',
    method: 'post',
    data: {
      deptCode: deptCode
    }
  })
}

export function getDeptsInfo(data) {
  return request({
    url: '/api/common/department/getDeptsInfo',
    method: 'post',
    data
  })
}
