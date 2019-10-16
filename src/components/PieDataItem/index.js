import React from 'react'
import { Input } from 'antd'
import {
  PieDataWrapper
} from './style'

class PieDataItem extends React.Component{
  constructor(props) {
    console.log(props);
    super(props)
    this.state = {
      data: props.value
    }

    this.handleChangeLabel = this.handleChangeLabel.bind(this)
    this.handleChangeValue = this.handleChangeValue.bind(this)
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
      </PieDataWrapper>
    )
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
  }



}

export default PieDataItem
