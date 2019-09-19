export default {
  menus: [
    {
      key: '/app/home',
      title: '首页',
      icon: 'mobile',
      component: 'Home',
      breadCrumb: ['首页']
    },
    {
      key: '/app/menu',
      title: '菜单',
      icon: 'scan',
      subs: [
        {
          key: '/app/menu/menu1',
          title: '菜单1',
          component: 'Menu1',
          breadCrumb: ['菜单', '菜单1']
        },
        {
          key: '/app/menu/menu2',
          title: '菜单2',
          component: 'Menu2',
          breadCrumb: ['菜单', '菜单2']
        }
      ]
    }
  ]
}