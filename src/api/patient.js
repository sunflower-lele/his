import request from '@/utils/request'

export function getInpatientInfo(patientNo) {
  return request({
    url: '/api/inpatient/queryInpatientInfo',
    method: 'post',
    data: {
      patientNo: patientNo
    }
  })
}

export function getPatientInfo(cardNo) {
  return request({
    url: '/api/common/patient/queryPatientInfo',
    method: 'post',
    data: {
      cardNo: cardNo
    }
  })
}
