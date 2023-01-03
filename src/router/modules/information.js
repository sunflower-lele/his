import Layout from '@/layout'

const informationRouter = {
  path: '/information',
  meta: {
    title: '信息中心',
    icon: 'nested',
    roles: ['information']
  },
  alwaysShow: true,
  component: Layout,
  children: [
    {
      path: 'report',
      meta: { title: '报表' },
      component: () => import('@/views/anesthesia/report/surgery/index')
    }
  ]
}

export default informationRouter
