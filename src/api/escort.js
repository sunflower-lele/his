import request from '@/utils/request'

export function escortList(data) {
  return request({
    url: '/api/common/patient/queryPatientInfo',
    method: 'post',
    baseURL: 'http://172.16.100.252:8025',
    data: {
      cardNo: data
    }
  })
}

export function escortBind(cardno, peihuno) {
  return request({
    url: '/api/inpatient/escort/bind',
    method: 'post',
    baseURL: 'http://172.16.100.252:8025',
    data: {
      patientIdx: cardno,
      helperCardNo: peihuno,
      emplCode: 'vueapi',
      remark: null
    }
  })
}

export function escortUpdateState(peihuno, state) {
  return request({
    url: '/api/inpatient/escort/updateState',
    method: 'post',
    baseURL: 'http://172.16.100.252:8025',
    data: {
      escortNo: peihuno,
      state: state,
      emplCode: 'vueapi'
    }
  })
}

export function getHelperInfo(peihuno) {
  return request({
    url: '/api/inpatient/escort/queryHelperInfo',
    method: 'post',
    baseURL: 'http://172.16.100.252:8025',
    data: {
      patientCardNo: peihuno
    }
  })
}

