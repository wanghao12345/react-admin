import React from 'react'
import {
  PieDataWrapper,
  DataName,
  DataValue
} from './style'

class PieDataItem extends React.Component{
  constructor(props) {
    console.log(props);
    super(props)
  }

  render() {
    return (
      <PieDataWrapper>
        <DataName value={this.props.value.label}></DataName>
        <DataValue value={this.props.value.value}></DataValue>
      </PieDataWrapper>
    )
  }
}

export default PieDataItem
