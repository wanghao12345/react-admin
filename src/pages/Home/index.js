/**
 * Created by wanghao on 2019/9/14
 */
import React, { useState, useEffect } from 'react';
import { Icon } from 'antd'
import {
  HomeWrapper,
  PanelWrapper,
  PanelTopWrapper
} from './style'

function Home() {

  const [panel1, setPanel1] = useState(1)
  const [panel2, setPanel2] = useState(1)


  return (
    <HomeWrapper>
      <PanelWrapper style={{'flex': panel1}}>
        <PanelTopWrapper>
          <Icon
            className="fullscreen"
            type="fullscreen"
            onClick= {() => {setPanel1(1);setPanel2(0)}}
          />
        </PanelTopWrapper>
      </PanelWrapper>
      <PanelWrapper  style={{'flex': panel2}}>
        <PanelTopWrapper>
          <Icon
            className="fullscreen"
            type="fullscreen"
            onClick= {() => {setPanel1(0);setPanel2(1)}}
          />
        </PanelTopWrapper>
      </PanelWrapper>
    </HomeWrapper>
  );
}

/**
 * 全屏
 */
function switchScreen() {
  alert('123')
}




export default Home;
