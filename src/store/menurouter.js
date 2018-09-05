export const defaultAccessMenu = [{
  path: '/test',
  icon: 'fas fa-vials',
  title: 'test',
  name: 'test',
  leftMemu: true,
  open: false,
  children: [{
    path: 'table',
    icon: 'fas fa-table',
    title: 'table',
    name: 'table',
    leftMemu: true
  },
  {
    path: 'charts',
    icon: 'fas fa-chart-bar',
    title: 'charts',
    name: 'charts',
    leftMemu: true
  },
  {
    path: 'color',
    icon: 'fas fa-palette',
    title: 'color',
    name: 'color',
    leftMemu: true
  }, {
    path: 'das',
    icon: 'fas fa-atom',
    title: 'das',
    name: 'das',
    leftMemu: true
  }, {
    path: 'dialog',
    icon: 'fas fa-atom',
    title: 'dialog',
    name: 'dialog',
    leftMemu: true
  }, {
    path: 'HelloWorld',
    icon: 'fas fa-atom',
    title: 'HelloWorld',
    name: 'HelloWorld',
    leftMemu: true
  }, {
    path: 'loading',
    icon: 'fas fa-spinner',
    title: 'loading',
    name: 'loading',
    leftMemu: true
  }, {
    path: 'test',
    icon: 'fas fa-atom',
    title: 'test',
    name: 'test',
    leftMemu: true
  }, {
    path: 'vc',
    icon: 'fas fa-atom',
    title: 'vc',
    name: 'vc',
    leftMemu: true
  },
  {
    path: 'MyThree',
    icon: 'fas fa-atom',
    title: 'MyThree',
    name: 'MyThree',
    leftMemu: true
  }]
},
{
  path: '/add',
  icon: 'fas fa-plus-square',
  title: 'add',
  name: 'add',
  open: false,
  leftMemu: true,
  children: [{
    path: 'tableadd',
    icon: 'fas fa-plus-square',
    title: 'tableadd',
    name: 'tableadd',
    leftMemu: true
  },
  {
    path: 'add2',
    icon: 'fas fa-plus-square',
    title: 'add2',
    name: 'add2',
    leftMemu: true
  }]
},
// {
//   path: '',
//   icon: 'settings',
//   title: '系统',
//   name: '系统',
//   leftMemu: true,
//   children: [{
//     path: '/system',
//     icon: 'settings',
//     title: '系统设置',
//     name: '系统设置',
//     leftMemu: true,
//     children: [{
//       path: 'menu',
//       icon: 'settings',
//       title: '菜单管理',
//       name: 'menu',
//       leftMemu: true
//     }]
//   },
//   {
//     path: '/permission',
//     icon: 'settings',
//     title: '权限管理',
//     name: '权限管理',
//     leftMemu: true,
//     children: [{
//       path: 'function',
//       icon: 'settings',
//       title: '功能管理',
//       name: 'function',
//       leftMemu: true
//     },
//     {
//       path: 'role',
//       icon: 'settings',
//       title: '角色管理',
//       name: 'role',
//       leftMemu: true
//     },
//     {
//       path: 'rolepermission',
//       icon: 'settings',
//       title: '角色权限管理',
//       name: 'rolepermission',
//       leftMemu: true
//     },
//     {
//       path: 'roleuser',
//       icon: 'settings',
//       title: '角色用户管理',
//       name: 'roleuser',
//       leftMemu: true
//     },
//     {
//       path: 'userrole',
//       icon: 'settings',
//       title: '用户角色管理',
//       name: 'userrole',
//       leftMemu: true
//     }
//     ]
//   },
//   {
//     path: '/organization',
//     icon: 'settings',
//     title: '组织架构',
//     name: '组织架构',
//     leftMemu: true,
//     children: [{
//       path: 'department',
//       icon: 'settings',
//       title: '部门管理',
//       name: 'department',
//       leftMemu: true
//     },
//     {
//       path: 'position',
//       icon: 'settings',
//       title: '职位管理',
//       name: 'position',
//       leftMemu: true
//     }
//     ]
//   },
//   {
//     path: '/user',
//     icon: 'settings',
//     title: '用户管理',
//     name: '用户管理',
//     leftMemu: true,
//     children: [{
//       path: 'index',
//       icon: 'settings',
//       title: '用户管理',
//       name: 'user_index',
//       leftMemu: true
//     }]
//   }
//   ]
// },
{
  path: '/',
  name: 'otherRouter',
  leftMemu: false,
  children: [{
    path: 'home',
    title: '首页',
    name: 'home_index'
  },
  {
    path: 'userinfo',
    title: '个人中心',
    name: 'userinfo'
  }
  ]
}
]
