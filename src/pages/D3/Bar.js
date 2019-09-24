import React, { useEffect } from 'react'
import * as d3 from 'd3'

function Bar() {
  useEffect(() => {
    drawChart(500, 300)
  }, [])

  return (
    <div>
      <div className="bar1"></div>
    </div>
  )
}

/**
 * 绘制柱状图
 */
function drawChart (w, h) {
  const marge = { top: 60, bottom: 60, left: 60, right: 60 };
  const dataset = [250, 210, 170, 130, 90];
  const rectHeight = 30;

  const svg = d3.select('.bar1')
              .append('svg')
              .attr('width', w)
              .attr('height', h);

  const g = svg.append('g')
            .attr('transform', 'translate(' + marge.top + ', '+ marge.left +')')

  g.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', 20)
    .attr('y', function (d, i) {
      return i * rectHeight
    })
    .attr('width', function (d) {
      return d
    })
    .attr('height', rectHeight - 5)
    .attr('fill', 'blue')

  // x轴比例尺
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, 250])
  // x轴坐标轴
  const xAxis = d3.axisBottom(xScale).ticks(5)

  g.append('g')
    .attr('transform', 'translate(20, '+ (dataset.length * rectHeight + 15) +')')
    .call(xAxis)
}



export default Bar