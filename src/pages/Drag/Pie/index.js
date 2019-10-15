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
    this.state = {
      editArr: [],
      addArr: []
    };

    this.handleEditMoveUp = this.handleEditMoveUp.bind(this)
    this.handleAddMoveUp = this.handleAddMoveUp.bind(this)
  }

  render () {
    return (
      <PieWrapper>
        <OptionWrapper>
          <OptionItemWrapper>
            <TitleWrapper>编辑数据</TitleWrapper>
            <ContentWrapper>
              <SourceItem handleMoveUp={this.handleEditMoveUp}></SourceItem>
              {
                this.state.editArr.map((item, index) => {
                  return  <SourceItem handleMoveUp={this.handleEditMoveUp} key={index}></SourceItem>
                })
              }
            </ContentWrapper>
          </OptionItemWrapper>
          <OptionItemWrapper>
            <TitleWrapper>添加数据</TitleWrapper>
            <ContentWrapper>
              {
                this.state.addArr.map((item, index) => {
                  return  <SourceItem handleMoveUp={this.handleAddMoveUp} key={index}></SourceItem>
                })
              }
            </ContentWrapper>
          </OptionItemWrapper>
        </OptionWrapper>
        <ShowWrapper>

        </ShowWrapper>
      </PieWrapper>
    )
  }

  /**
   * 鼠标编辑移动结束
   */
  handleEditMoveUp (drag) {
    const arr = this.state.addArr;
    arr.push(drag)

    this.setState({
      addArr: arr
    })
  }

  /**
   * 鼠标增加移动结束
   */
  handleAddMoveUp (drag) {

  }
}

export default Pie
