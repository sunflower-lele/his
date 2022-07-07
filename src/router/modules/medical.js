
import Layout from '@/layout'

const medicalRouter = {
  path: '/medical',
  meta: {
    title: '医务处',
    icon: 'nested',
    roles: ['medical']
  },
  component: Layout,
  children: [
    {
      path: 'surgery',
      meta: { title: '手术管理' },
      component: () => import('@/views/medical/surgery/index'), // Parent router-view
      children: [
        {
          path: 'dictionary',
          name: 'dictionary',
          meta: { title: '手术字典' },
          component: () => import('@/views/medical/surgery/dictionary/index')
        },
        {
          path: 'privilege',
          meta: { title: '手术授权' },
          component: () => import('@/views/medical/surgery/privilege/index'),
          children: [
            {
              path: 'department',
              name: 'department',
              meta: { title: '科室授权' },
              component: () => import('@/views/medical/surgery/privilege/department/index')
            }, {
              path: 'employee',
              name: 'employee',
              meta: { title: '医师授权' },
              component: () => import('@/views/medical/surgery/privilege/employee/index')
            }
          ]
        }
      ]
    }
  ]
}

export default medicalRouter
