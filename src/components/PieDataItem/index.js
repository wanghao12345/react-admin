import React from 'react'
import {
  PieDataWrapper,
  DataName,
  DataValue
} from './style'

class PieDataItem extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PieDataWrapper>
        <DataName></DataName>
        <DataValue></DataValue>
      </PieDataWrapper>
    )
  }
}

export default PieDataItem
