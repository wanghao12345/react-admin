import echarts from 'echarts'
import 'echarts/extension/bmap/bmap'
class Map {
  constructor(id, opt) {
    this.initChart(id, opt)
  }

  initChart(id, opt={}) {
    var data = [
      {name: '北京', value: 2},
      {name: '上海', value: 1},
      {name: '厦门', value: 1},
      {name: '重庆', value: 1},
      {name: '哈尔滨', value: 1},
      {name: '合肥', value: 1},
      {name: '武汉', value: 1},
    ];
    var geoCoordMap = {
      '北京':[116.46,39.92],
      '上海':[121.48,31.22],
      '厦门':[118.1,24.46],
      '重庆':[106.54,29.59],
      '哈尔滨':[126.63,45.75],
      '合肥':[117.27,31.86],
      '武汉':[114.31,30.52]
    };
    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    };
    const container = document.getElementById(id);
    const option = {
      bmap: {
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
          styleJson: [
            {
              "featureType": "water",
              "elementType": "all",
              "stylers": {
                "color": "#044161"
              }
            },
            {
              "featureType": "land",
              "elementType": "all",
              "stylers": {
                "color": "#004981"
              }
            },
            {
              "featureType": "boundary",
              "elementType": "geometry",
              "stylers": {
                "color": "#064f85"
              }
            },
            {
              "featureType": "railway",
              "elementType": "all",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "highway",
              "elementType": "geometry",
              "stylers": {
                "color": "#004981"
              }
            },
            {
              "featureType": "highway",
              "elementType": "geometry.fill",
              "stylers": {
                "color": "#005b96",
                "lightness": 1
              }
            },
            {
              "featureType": "highway",
              "elementType": "labels",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "arterial",
              "elementType": "geometry",
              "stylers": {
                "color": "#004981"
              }
            },
            {
              "featureType": "arterial",
              "elementType": "geometry.fill",
              "stylers": {
                "color": "#00508b"
              }
            },
            {
              "featureType": "poi",
              "elementType": "all",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "green",
              "elementType": "all",
              "stylers": {
                "color": "#056197",
                "visibility": "off"
              }
            },
            {
              "featureType": "subway",
              "elementType": "all",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "manmade",
              "elementType": "all",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "local",
              "elementType": "all",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "arterial",
              "elementType": "labels",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "boundary",
              "elementType": "geometry.fill",
              "stylers": {
                "color": "#029fd4"
              }
            },
            {
              "featureType": "building",
              "elementType": "all",
              "stylers": {
                "color": "#1a5787"
              }
            },
            {
              "featureType": "label",
              "elementType": "all",
              "stylers": {
                "visibility": "off"
              }
            }
          ]
        }
      },
      series : [
        {
          name: '标点',
          type: 'effectScatter',
          coordinateSystem: 'bmap',
          data: convertData(data.sort(function (a, b) {
            return b.value - a.value;
          }).slice(0, 6)),
          symbolSize: function (val) {
            return val[2] * 10;
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#ddb926',
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          zlevel: 1
        },
        {
          name: '连线',
          type: 'lines',
          coordinateSystem: 'bmap',
          zlevel: 2,
          effect: {
            show: true,
            period: 1,
            trailLength: 0.1,
            color: '#ddb926',
            symbol: 'triangle',
            symbolSize: 5
          },
          lineStyle: {
            color: '#ddb926',
            width: 1,
            curveness: 0.2
          },
          data: [
            {
              coords: [
                [116.46,39.92],
                [121.48,31.22]
              ]
            },
            {
              coords: [
                [116.46,39.92],
                [106.54,29.59]
              ]
            },
            {
              coords: [
                [116.46,39.92],
                [126.63,45.75]
              ]
            },
            {
              coords: [
                [116.46,39.92],
                [118.1,24.46]
              ]
            },
            {
              coords: [
                [116.46,39.92],
                [117.27,31.86]
              ]
            }
          ]
        }
      ]
    };
    Object.assign(option, opt)
    const myChart = echarts.init(container);
    myChart.setOption(option, true);
    return myChart;
  }
}

export default Map
