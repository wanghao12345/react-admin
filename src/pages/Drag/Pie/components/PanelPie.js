import React from 'react'
import Pie from '@/components/Pie'


import {PanelPieWrapper, PieWrapper} from './style'

class PanelPie extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pie: null
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps);
    const option = this.getPieOption(nextProps)
    console.log(option.series.data);
    this.state.pie.setOption(option)
  }

  componentDidMount() {
    const pie = new Pie('pieWrapper', this.getPieOption(this.props));
    this.setState(() => ({
      pie: pie
    }));
  }

  render () {
    return (
      <PanelPieWrapper>
        <PieWrapper id="pieWrapper"></PieWrapper>
      </PanelPieWrapper>
    )
  }

  getPieOption (props) {
    let data = []
    props.pieData.forEach((item) => {
      if (item.status) {
        data.push({
          value: item.value,
          name: item.label
        })
      }
    });
    this.setState(() => ({
      data: data
    }))
    const option = {
      grid: {
        width: '100%',
        height: '100%'
      },
      series: [
        {
          name:'环形',
          type:'pie',
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
          data: data
        }
      ]
    };
    return option
  }

}

export default PanelPie
