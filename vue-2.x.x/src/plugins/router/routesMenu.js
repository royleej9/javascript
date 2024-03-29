const routesMenu = [
  {
    path: '/menu1',
    name: 'menu_menu1',
    meta: {
      title: 'menu_menu1',
      allowedUserPrivileges: [0, 1]
    },
    component: () =>
      import(/* webpackChunkName: "Menu1Main" */ '@menu1/Menu1Main.vue')
  },
  {
    path: '/menu2',
    name: 'menu_menu2',
    meta: {
      title: 'menu_menu2',
      allowedUserPrivileges: [0, 1]
    },
    component: () =>
      import(/* webpackChunkName: "Menu2Main" */ '@menu2/Menu2Main.vue')
  },
  {
    path: '/menu_user',
    name: 'menu_user',
    meta: { title: 'menu_user' },
    children: [
      {
        path: '/user/account',
        name: 'menu_user_acccout',
        meta: {
          title: 'menu_user_acccout',
          allowedUserPrivileges: [0]
        },
        component: () =>
          import(
            /* webpackChunkName: "UserAccountMain" */ '@user/UserAccountMain.vue'
          )
      },
      {
        path: '/user/changeHistory',
        name: 'menu_user_info_changeHistory',
        meta: {
          title: 'menu_user_info_changeHistory',
          allowedUserPrivileges: [0]
        },
        component: () =>
          import(
            /* webpackChunkName: "UserInfoChangeHistoryMain" */ '@user/UserInfoChangeHistoryMain.vue'
          )
      },
      {
        path: '/user/loginHistory',
        name: 'menu_user_login_history',
        meta: {
          title: 'menu_user_login_history',
          allowedUserPrivileges: [0]
        },
        component: () =>
          import(
            /* webpackChunkName: "UserLoginHistoryMain" */ '@user/UserLoginHistoryMain.vue'
          )
      }
    ]
  }
];

export default routesMenu;
