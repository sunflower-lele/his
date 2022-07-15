import request from '@/utils/request'

export function getInpatientInfo(patientNo) {
  return request({
    baseURL: 'http://172.16.100.252',
    url: '/api/inpatient/getInfo',
    method: 'get',
    params: { patientNo }
  })
}

export function getPatientInfo(cardNo) {
  return request({
    baseURL: 'http://172.16.100.252',
    url: '/api/common/patient/getInfo',
    method: 'get',
    params: { cardNo }
  })
}
