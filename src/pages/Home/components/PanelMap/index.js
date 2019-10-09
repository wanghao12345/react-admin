import React, { useEffect } from 'react'
import { PanelMapWrapper } from './style'
import Map from '@/components/Map'


function PanelMap() {
  useEffect(() => {
    setTimeout(() => {
      new Map('mapContainer')
    }, 200)
  }, [])
  return (
    <PanelMapWrapper id="mapContainer"></PanelMapWrapper>
  )
}

export default PanelMap

