
const layout = () => import('../components/Default')

// 不作为Main组件的子页面展示的页面单独写，如下
const loginRouter = {
  path: '/login',
  name: 'login',
  component: () => import('../views/login')
}

const page403 = {
  path: '/404',
  name: '404',
  component: () => import('../views/404')
}

// 作为layout组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里(children至少包含一个子路由)
const otherRouter = {
  path: '/',
  component: layout,
  redirect: 'home',
  children: [
    {
      path: 'home',
      name: 'home',
      component: () => import('../views/index')
    }
  ]
}
// 作为layout组件的子页面展示并且在左侧菜单显示的路由写在appRouter里(children至少包含一个子路由)
const appRouter = [
  {
    path: '/cms',
    name: 'CMS',
    component: layout,
    children: [
      {
        path: 'article',
        name: 'article',
        component: () => import('../views/cms/post.vue')
      },
      {
        path: 'article/:id',
        name: 'post_edit',
        component: () => import('../views/cms/post_edit.vue')
      },
      {
        path: 'comment',
        name: 'comment',
        component: () => import('../views/cms/comment.vue')
      }
    ]
  },
  {
    path: '/system',
    name: '系统设置',
    component: layout,
    children: [
      {
        path: 'menu',
        name: 'menu',
        component: () => import('../views/system/menu.vue')
      }
    ]
  },
  //   {
  //     path: '/permission',
  //     name: '权限管理',
  //     component: layout,
  //     children: [
  //       {
  //         path: 'function',
  //         name: 'function',
  //         component: () => import('../views/permission/function.vue')
  //       },
  //       {
  //         path: 'role',
  //         name: 'role',
  //         component: () => import('../views/permission/role.vue')
  //       },
  //       {
  //         path: 'rolepermission',
  //         name: 'rolepermission',
  //         component: () => import('../views/permission/rolepermission.vue')
  //       },
  //       {
  //         path: 'roleuser',
  //         name: 'roleuser',
  //         component: () => import('../views/permission/roleuser.vue')
  //       },
  //       {
  //         path: 'userrole',
  //         name: 'userrole',
  //         component: () => import('../views/permission/userrole.vue')
  //       }
  //     ]
  //   },
  {
    path: '/test',
    name: '测试',
    component: layout,
    children: [
      {
        path: 'backtop',
        name: 'backtop',
        component: () => import('../views/test/backtop.vue')
      },
      {
        path: 'charts',
        name: 'charts',
        component: () => import('../views/test/charts.vue')
      },
      {
        path: 'color',
        name: 'color',
        component: () => import('../views/test/color.vue')
      },
      {
        path: 'das',
        name: 'das',
        component: () => import('../views/test/das.vue')
      },
      {
        path: 'dialog',
        name: 'dialog',
        component: () => import('../views/test/dialog.vue')
      },
      {
        path: 'HelloWorld',
        name: 'HelloWorld',
        component: () => import('../views/test/HelloWorld.vue')
      },
      {
        path: 'loading',
        name: 'loading',
        component: () => import('../views/test/loading.vue')
      },
      {
        path: 'vc',
        name: 'vc',
        component: () => import('../views/test/vc.vue')
      },
      {
        path: 'table',
        name: 'table',
        component: () => import('../views/test/table.vue')
      },
      {
        path: 'MyThree',
        name: 'MyThree',
        component: () => import('../views/MyThree.vue')
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('../views/test/test.vue')
      }
    ]
  },
  {
    path: '/add',
    name: 'add',
    component: layout,
    children: [
      {
        path: 'tableadd',
        name: 'tableadd',
        component: () => import('../views/add/tableadd.vue')
      }, {
        path: 'add2',
        name: 'add2',
        component: () => import('../views/add/add2.vue')
      }
    ]
  }
//   {
//     path: '/business',
//     name: 'business',
//     component: layout,
//     children: [
//       {
//         path: 'sku',
//         name: 'sku',
//         component: () => import('../views/develop/business/sku.vue')
//       }
//     ]
//   }
]

// const developRouter = [
//   {
//     path: '/official',
//     name: 'official',
//     component: layout,
//     children: [
//       {
//         path: 'button',
//         name: 'button',
//         component: () => import('../views/develop/official/button.md')
//       },
//       {
//         path: 'button-group',
//         name: 'button-group',
//         component: () => import('../views/develop/official/button-group.md')
//       },
//       {
//         path: 'dropdown-button',
//         name: 'dropdown-button',
//         component: () => import('../views/develop/official/dropdown-button.md')
//       },
//       {
//         path: 'toolbar',
//         name: 'toolbar',
//         component: () => import('../views/develop/official/toolbar.md')
//       }
//     ]
//   }
// ]

// 所有上面定义的路由都要写在下面的routers里
export const routes = [
  loginRouter,
  page403,
  otherRouter,
  ...appRouter
//   ...developRouter
]
