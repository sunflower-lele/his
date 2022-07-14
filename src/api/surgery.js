import request from '@/utils/request'

export function getDictionary() {
  return request({
    url: '/api/inpatient/surgery/dictionary/getDictionary',
    method: 'post',
    data: {}
  })
}

export function addDictionary(icdCode, name, level, teleprompter) {
  return request({
    url: '/api/inpatient/surgery/dictionary/addDictionary',
    method: 'post',
    data: {
      icdCode: icdCode,
      name: name,
      level: level,
      teleprompter: teleprompter
    }
  })
}

export function modifyDictionary(icdCode, name, level, teleprompter) {
  return request({
    url: '/api/inpatient/surgery/dictionary/modifyDictionary',
    method: 'post',
    data: {
      icdCode: icdCode,
      name: name,
      level: level,
      teleprompter: teleprompter
    }
  })
}

export function removeDictionary(icdCode) {
  return request({
    url: '/api/inpatient/surgery/dictionary/removeDictionary',
    method: 'post',
    data: {
      icdCode: icdCode
    }
  })
}

export function querySurgeryInfos(data) {
  return request({
    url: '/api/inpatient/surgery/querySurgeryInfos',
    method: 'post',
    data
  })
}
