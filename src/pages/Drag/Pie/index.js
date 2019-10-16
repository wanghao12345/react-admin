import React from 'react'
import SourceItem from '@/components/SourceItem'
import PieDataItem from '@/components/PieDataItem'
import {
  PieWrapper,
  OptionWrapper,
  ShowWrapper,
  OptionItemWrapper,
  TitleWrapper,
  ContentWrapper
} from './style'

class Pie extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      editArr: [],
      addArr: []
    };

    this.handleMoveUp = this.handleMoveUp.bind(this)
  }

  render () {
    return (
      <PieWrapper>
        <OptionWrapper>
          <OptionItemWrapper>
            <TitleWrapper>编辑数据</TitleWrapper>
            <ContentWrapper ref="editDataWrapper">
              <SourceItem handleMoveUp={this.handleMoveUp}>
                <PieDataItem></PieDataItem>
              </SourceItem>
              <SourceItem handleMoveUp={this.handleMoveUp}>
                <PieDataItem></PieDataItem>
              </SourceItem>
            </ContentWrapper>
          </OptionItemWrapper>
          <OptionItemWrapper>
            <TitleWrapper>添加数据</TitleWrapper>
            <ContentWrapper ref="addDataWrapper">
            </ContentWrapper>
          </OptionItemWrapper>
        </OptionWrapper>
        <ShowWrapper>

        </ShowWrapper>
      </PieWrapper>
    )
  }

  /**
   * 鼠标放开移动物体
   * @param e
   * @param drag
   */
  handleMoveUp (e, drag) {
    if (this.mouseIsInWrapperArea(e, this.refs.addDataWrapper)) {
      this.refs.addDataWrapper.appendChild(drag)
    }
    if (this.mouseIsInWrapperArea(e, this.refs.editDataWrapper)) {
      this.refs.editDataWrapper.appendChild(drag)
    }
  }

  /**
   * 判断鼠标是否在某个区域内
   */
  mouseIsInWrapperArea (e, dom) {
    const clientX = e.clientX;
    const clientY = e.clientY;

    const areaX = [dom.offsetLeft, dom.offsetLeft + dom.offsetWidth]
    const areaY = [dom.offsetTop, dom.offsetTop + dom.offsetHeight]

    if (clientX < areaX[0] || clientX > areaX[1]) {
      return false
    }
    if (clientY < areaY[0] || clientY > areaY[1]) {
      return false
    }
    return true
  }

}

export default Pie
