
import Layout from '@/layout'

const anesthesiaRouter = {
  path: '/anesthesia',
  meta: {
    title: '麻醉科',
    icon: 'nested',
    roles: ['anesthesia']
  },
  component: Layout,
  children: [
    {
      path: 'report',
      meta: { title: '报表', icon: 'nested' },
      alwaysShow: true,
      component: () => import('@/views/anesthesia/report/index'),
      children: [
        {
          path: 'surgery',
          meta: { title: '手术统计' },
          component: () => import('@/views/anesthesia/report/surgery/index')
        }
      ]
    }
  ]
}

export default anesthesiaRouter
