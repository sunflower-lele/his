
import Layout from '@/layout'

const userRouter = {
  path: '/user',
  meta: {
    title: '用户及权限管理',
    icon: 'nested',
    roles: ['user']
  },
  component: Layout,
  children: [
    {
      path: 'escort',
      meta: { title: '角色管理', icon: 'dashboard' },
      component: () => import('@/views/user/role/index')
    },
    {
      path: 'invoice',
      meta: { title: '用户管理', icon: 'dashboard' },
      component: () => import('@/views/user/baseinfo/index')
    },
    {
      path: 'invoice',
      meta: { title: '权限管理', icon: 'dashboard' },
      component: () => import('@/views/user/role/index')
    }
  ]
}

export default userRouter
