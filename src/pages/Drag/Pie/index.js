import React from 'react'
import SourceItem from '@/components/SourceItem'
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
  }

  render () {
    return (
      <PieWrapper>
        <OptionWrapper>
          <OptionItemWrapper>
            <TitleWrapper>编辑数据</TitleWrapper>
            <ContentWrapper>
              <SourceItem handleMoveUp={this.handleMoveUp}></SourceItem>
              <SourceItem handleMoveUp={this.handleMoveUp}></SourceItem>
            </ContentWrapper>
          </OptionItemWrapper>
          <OptionItemWrapper>
            <TitleWrapper>添加数据</TitleWrapper>
            <ContentWrapper>

            </ContentWrapper>
          </OptionItemWrapper>
        </OptionWrapper>
        <ShowWrapper>

        </ShowWrapper>
      </PieWrapper>
    )
  }

  /**
   * 鼠标移动结束
   */
  handleMoveUp () {
    alert('收到')
  }

}

export default Pie
