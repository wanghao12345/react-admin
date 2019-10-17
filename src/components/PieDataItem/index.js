import React from 'react'
import { Input, Icon } from 'antd'
import {
  PieDataWrapper
} from './style'

class PieDataItem extends React.Component{
  constructor(props) {
    console.log(props);
    super(props)
    this.state = {
      data: {...props.value, ...{index: props.index}}
    }

    this.handleChangeLabel = this.handleChangeLabel.bind(this)
    this.handleChangeValue = this.handleChangeValue.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }

  render() {
    return (
      <PieDataWrapper>
        <Input
          className="label"
          placeholder="名称"
          value={this.state.data.label}
          onChange={this.handleChangeLabel}
        />
        <Input
          className="value"
          placeholder="值"
          value={this.state.data.value}
          onChange={this.handleChangeValue}
        />
        <Icon
          type="close-circle"
          onClick={this.handleDeleteItem}
        />
      </PieDataWrapper>
    )
  }

  /**
   * 删除Item
   */
  handleDeleteItem () {
    this.props.handleDeleteItem(this.state.data)
  }

  /**
   * 改变label
   * @param e
   */
  handleChangeLabel (e) {
    const data = this.state.data
    data.label = e.target.value
    this.setState(() => ({
      data: data
    }))
    this.props.handleChangeItem(this.state.data)
  }

  /**
   * 改变value
   * @param e
   */
  handleChangeValue (e) {
    const data = this.state.data
    data.value = e.target.value
    this.setState(() => ({
      data: data
    }))
    this.props.handleChangeItem(this.state.data)
  }



}

export default PieDataItem
