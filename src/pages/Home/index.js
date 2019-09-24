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
          <Panel></Panel>
        </PieWrapper>
        <MapWrapper>
          <Panel></Panel>
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
