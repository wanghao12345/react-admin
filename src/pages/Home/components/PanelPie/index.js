import React, {useState,useEffect} from 'react'
import {PanelPieWrapper, PieItem} from './style'
import Pie from '@/components/Pie'


function PanelPie() {
  const pieList = [{}, {}, {}, {}];
  const pieStyle = {
    width: 205,
    height: 185
  }

  useEffect(() => {
    const pie = new Pie()
    pie.initChart('pie-0')
    pie.initChart('pie-1')
    pie.initChart('pie-2')
    pie.initChart('pie-3')
  }, [])

  return (
    <PanelPieWrapper id="PanelPieWrapper">
      {
        pieList.map((item, index) => {
          return <PieItem key={index}>
            <div id={'pie-' + index} style={pieStyle}></div>
          </PieItem>
        })
      }
    </PanelPieWrapper>
  )
}


export default PanelPie