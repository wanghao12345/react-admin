import echarts from 'echarts'
class Pie {

  constructor() {

  }
  /**
   * 初始化
   * @param option
   * @param echartId
   */
  initChart (echartId, opt) {
    const container = eval("document.getElementById('" + echartId + "')");
    const option = {
      grid: {
        width: '100%',
        height: '100%'
      },
      series: [
        {
          name:'环形',
          type:'pie',
          radius: ['60%', '80%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            color: ['#17becf', '#1f77b4', '#9484df']
          },
          data:[
            {
              value:335,
              name:'直接访问',
              itemStyle: {
                color: '#17becf'
              },
            },
            {
              value:310,
              name:'邮件营销',
              itemStyle: {
                color: '#1f77b4'
              },
            },
            {
              value:234,
              name:'联盟广告',
              itemStyle: {
                color: '#9484df'
              },
            }
          ]
        }
      ]
    };
    Object.assign(option, opt)
    const myChart = echarts.init(container);
    myChart.setOption(option,true);
    return myChart;
  }

}

export default Pie