import React, {useEffect} from 'react'
import {PanelPieWrapper, PieItem} from './style'
import Pie from '@/components/Pie'


function PanelPie() {
  const pieList = [{}, {}, {}, {}, {}, {}]

  useEffect(() => {
    const pie = new Pie()
    pie.initChart('pie-0')
    pie.initChart('pie-1')
    pie.initChart('pie-2')
    pie.initChart('pie-3')
    pie.initChart('pie-4')
    pie.initChart('pie-5')
  }, [])

  return (
    <PanelPieWrapper>
      {
        pieList.map((item, index) => {
          return <PieItem key={index}>
            <div id={'pie-' + index} style={{width: '100%', height: '100%'}}></div>
          </PieItem>
        })
      }
    </PanelPieWrapper>
  )
}


export default PanelPie