export default {
  menus: [
    {
      key: '/app/home',
      title: '首页',
      icon: 'mobile'
    },
    {
      key: '/app/menu',
      title: '菜单',
      icon: 'scan',
      subs: [
        {
          key: '/app/menu1',
          title: '菜单1'
        },
        {
          key: '/app/menu2',
          title: '菜单2'
        }
      ]
    }
  ]
}