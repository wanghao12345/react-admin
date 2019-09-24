import React, {useState} from 'react'
import {
  PanelTopWrapper,
  PanelBottomWrapper,
  PanelWrapper,
  PanelTitle
} from "./style";
import {Icon} from "antd";
import {CSSTransition} from "react-transition-group";


function Panel(props) {
  console.log(props);
  const [panel, setPanel] = useState(false);
  const {title, children} = props
  return (
    <CSSTransition
      in={panel}
      timeout={200}
      classNames="slide"
    >
      <PanelWrapper>
        <PanelTopWrapper>
          <PanelTitle>
            {title}
          </PanelTitle>
          <Icon
            className="fullscreen"
            type={panel ? 'fullscreen-exit' : 'fullscreen'}
            onClick={() => setPanel(!panel)}
          />
        </PanelTopWrapper>
        <PanelBottomWrapper>
          {children}
        </PanelBottomWrapper>
      </PanelWrapper>
    </CSSTransition>
  )
}

export default Panel