import request from '@/utils/request'

export function getPrepayInfo(patientNo) {
  return request({
    url: '/api/inpatient/fee/prepay/invoice/getPrepayInfo',
    method: 'post',
    data: {
      patientNo: patientNo
    }
  })
}

export function fixPrepayInfo(receiptNo) {
  return request({
    url: '/api/inpatient/fee/prepay/invoice/fixPrepayInfo',
    method: 'post',
    data: {
      receiptNo: receiptNo
    }
  })
}
