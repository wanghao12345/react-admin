import React, {useState} from 'react'
import {PanelTopWrapper, PanelWrapper} from "./style";
import {Icon} from "antd";
import {CSSTransition} from "react-transition-group";


function Panel() {
  const [panel, setPanel] = useState(false)
  return (
    <CSSTransition
      in={panel}
      timeout={200}
      classNames="slide"
    >
      <PanelWrapper>
        <PanelTopWrapper>
          <Icon
            className="fullscreen"
            type={panel ? 'fullscreen-exit' : 'fullscreen'}
            onClick={() => setPanel(!panel)}
          />
        </PanelTopWrapper>
      </PanelWrapper>
    </CSSTransition>
  )
}

export default Panel