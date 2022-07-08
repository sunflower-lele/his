
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
      path: 'role',
      meta: { title: '角色管理', icon: 'dashboard' },
      component: () => import('@/views/user/role/index')
    },
    {
      path: 'baseinfo',
      meta: { title: '用户管理', icon: 'dashboard' },
      component: () => import('@/views/user/baseinfo/index')
    },
    {
      path: 'permission',
      meta: { title: '权限管理', icon: 'dashboard' },
      component: () => import('@/views/user/permission/index')
    }
  ]
}

export default userRouter
