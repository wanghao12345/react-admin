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
      key: '/app/d3',
      title: 'd3示例',
      icon: 'bar-chart',
      subs: [
        {
          key: '/app/d3/bar',
          title: '柱状图',
          component: 'D3Bar',
          breadCrumb: ['d3示例', '柱状图']
        },
        {
          key: '/app/d3/line',
          title: '折线图',
          component: 'D3Line',
          breadCrumb: ['d3示例', '折线图']
        }
      ]
    },
    {
      key: '/app/drag',
      title: '拖拽',
      icon: 'bg-colors',
      subs: [
        {
          key: '/app/drag/pie',
          title: '饼图',
          component: 'DragPie',
          breadCrumb: ['拖拽', '饼图']
        }
      ]
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
