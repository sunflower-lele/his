import request from '@/utils/request'

export function queryRaffleLogs() {
  return request({
    url: '/api/tool/raffle/queryRaffleLogs',
    method: 'get',
    baseURL: 'http://172.16.100.252'
  })
}

export function queryFeaturePool() {
  return request({
    url: '/api/tool/raffle/queryFeaturePool',
    method: 'get',
    baseURL: 'http://172.16.100.252'
  })
}

export function cancelAll() {
  return request({
    url: '/api/tool/raffle/cancelAll',
    method: 'post',
    baseURL: 'http://172.16.100.252'
  })
}

export function addFeature(feature, count) {
  return request({
    url: '/api/tool/raffle/addFeature',
    method: 'post',
    baseURL: 'http://172.16.100.252',
    data: {
      feature: feature,
      count: count
    }
  })
}
