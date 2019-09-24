import React from 'react';
import Panel from '@/components/Panel'
import {
  HomeWrapper,
  HomeTopWrapper,
  PieWrapper,
  MapWrapper,
  RollWrapper,
  HomeBottomWrapper
} from './style'

function Home() {

  return (
    <HomeWrapper>
      <HomeTopWrapper>
        <PieWrapper>
          <Panel title="环形图">

          </Panel>
        </PieWrapper>
        <MapWrapper>
          <Panel title="地图">

          </Panel>
        </MapWrapper>
        <RollWrapper>
          <Panel></Panel>
        </RollWrapper>
      </HomeTopWrapper>
      <HomeBottomWrapper>
        <Panel></Panel>
      </HomeBottomWrapper>
    </HomeWrapper>
  );
}

export default Home;
