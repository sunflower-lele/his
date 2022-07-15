import request from '@/utils/request'

export function getPrepayInfo(patientNo) {
  return request({
    baseURL: 'http://172.16.100.252',
    url: '/api/inpatient/prepay/invoice/getInfo',
    method: 'get',
    params: { patientNo }
  })
}

export function fixPrepayInfo(receiptNo) {
  return request({
    baseURL: 'http://172.16.100.252',
    url: '/api/inpatient/prepay/invoice/fixData',
    method: 'post',
    data: {
      receiptNo: receiptNo
    }
  })
}
