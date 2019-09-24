import React, {useEffect} from 'react'
import {PanelPieWrapper, PieItem} from './style'
import Pie from '@/components/Pie'


function PanelPie() {
  const pieList = [{}, {}, {}, {}]

  useEffect(() => {
    const pie = new Pie()
    pie.initChart('pie-0')
    pie.initChart('pie-1')
    pie.initChart('pie-2')
    pie.initChart('pie-3')
  }, [])

  return (
    <PanelPieWrapper>
      {
        pieList.map((item, index) => {
          return <PieItem key={index}>
            <div id={'pie-' + index} style={{width: 205, height: 185}}></div>
          </PieItem>
        })
      }
    </PanelPieWrapper>
  )
}


export default PanelPie