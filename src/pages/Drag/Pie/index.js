import React from 'react'
import SourceItem from '@/components/SourceItem'
import PieDataItem from '@/components/PieDataItem'
import { Icon } from 'antd'
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
      pieData: [
        {
          label: '',
          value: '',
          status: 0
        }
      ]
    };

    this.handleMoveUp = this.handleMoveUp.bind(this)
    this.handleAddDataItem = this.handleAddDataItem.bind(this)
    this.handleChangeItem = this.handleChangeItem.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }

  render () {
    return (
      <PieWrapper>
        <OptionWrapper>
          <OptionItemWrapper>
            <TitleWrapper>
              编辑数据
              <Icon onClick={this.handleAddDataItem} type="plus" />
            </TitleWrapper>
            <ContentWrapper ref="editDataWrapper">
              {
                this.state.pieData.map((item, index) => {
                  if (!item.status) {
                    return (<SourceItem key={index} index={index} handleMoveUp={this.handleMoveUp}>
                      <PieDataItem
                        value={item}
                        handleChangeItem={this.handleChangeItem}
                        handleDeleteItem={this.handleDeleteItem}
                      ></PieDataItem>
                    </SourceItem>)
                  }
                })
              }
            </ContentWrapper>
          </OptionItemWrapper>
          <OptionItemWrapper>
            <TitleWrapper>添加数据</TitleWrapper>
            <ContentWrapper ref="addDataWrapper">
              {
                this.state.pieData.map((item, index) => {
                  if (item.status) {
                    return (<SourceItem key={index} index={index} handleMoveUp={this.handleMoveUp}>
                      <PieDataItem
                        value={item}
                        handleChangeItem={this.handleChangeItem}
                        handleDeleteItem={this.handleDeleteItem}
                      ></PieDataItem>
                    </SourceItem>)
                  }
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
   * 删除
   */
  handleDeleteItem (val) {
    const pieData = this.state.pieData
    pieData.splice(val.index, 1);
    this.setState({
      pieData
    });
  }

  /**
   * 改变选项的值
   */
  handleChangeItem (val) {
    this.setState((state) => ({
      pieData: state.pieData.map(
        (item, _index) =>
          (_index === val.index ? {...item, label: val.label, value: val.value} : item)
      )
    }))
  }

  /**
   * 添加数据
   */
  handleAddDataItem () {
    const item = {
      label: '',
      value: '',
      status: 0
    }
    this.setState((state) => ({
      pieData: [...state.pieData, item]
    }))
  }

  /**
   * 鼠标放开移动物体
   * @param e
   * @param drag
   */
  handleMoveUp (e, drag, index) {
    let status = 0
    if (this.mouseIsInWrapperArea(e, this.refs.addDataWrapper)) {
      status = 1
    }
    if (this.mouseIsInWrapperArea(e, this.refs.editDataWrapper)) {
      status = 0
    }
    this.setState((state) => ({
      pieData: state.pieData.map(
        (item, _index) =>
          (_index === index ? {...item, status: status} : item)
      )
    }))
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
