
import Layout from '@/layout'

const chargeRouter = {
  path: '/charge',
  meta: {
    title: '结算中心',
    icon: 'nested',
    roles: ['charge']
  },
  component: Layout,
  children: [
    {
      path: 'invoice',
      meta: { title: '发票', icon: 'nested' },
      alwaysShow: true,
      component: () => import('@/views/charge/invoice/index'),
      children: [
        {
          path: 'repair',
          meta: { title: '结算电子票修复', icon: 'el-icon-document' },
          component: () => import('@/views/charge/invoice/repair/index')
        },
        {
          path: 'invoice',
          meta: { title: '电子发票', icon: 'documentation' },
          component: () => import('@/views/charge/invoice/invoice/index'),
          hidden: true
        }
      ]
    },
    {
      path: 'escort',
      meta: { title: '陪护', icon: 'documentation' },
      component: () => import('@/views/charge/escort/index'),
      hidden: true
    }
  ]
}

export default chargeRouter
