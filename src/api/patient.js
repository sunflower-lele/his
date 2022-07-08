import request from '@/utils/request'

export function getDictionary() {
  return request({
    url: '/api/inpatient/surgery/dictionary/getDictionary',
    method: 'post',
    data: {}
  })
}
