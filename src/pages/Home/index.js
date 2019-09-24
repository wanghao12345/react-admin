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
import PanelPie from './components/PanelPie'

function Home() {
  return (
    <HomeWrapper>
      <HomeTopWrapper>
        <PieWrapper>
          <Panel title="环形图">
            <PanelPie />
          </Panel>
        </PieWrapper>
        <MapWrapper>
          <Panel title="地图">

          </Panel>
        </MapWrapper>
        <RollWrapper>
          <Panel title="字幕滚动">

          </Panel>
        </RollWrapper>
      </HomeTopWrapper>
      <HomeBottomWrapper>
        <Panel title="折线图">

        </Panel>
      </HomeBottomWrapper>
    </HomeWrapper>
  );
}

export default Home;
