import React, { useEffect } from 'react'
import {PanelPieWrapper, PieItem} from './style'
import Pie from '@/components/Pie'


function PanelPie() {
  const pieList = [{}, {}, {}, {}];
  const pieStyle = {
    width: 205,
    height: 185
  }

  useEffect(() => {
    new Pie('pie-0')
    new Pie('pie-1')
    new Pie('pie-2')
    new Pie('pie-3')
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
