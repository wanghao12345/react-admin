import React from 'react'
import { ItemWrapper, MoveIcon } from './style'
import { Icon } from 'antd'

class SourceItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragBtn: {
        display: 'none'
      }
    };
    this.handleMoveItem = this.handleMoveItem.bind(this)
    this.handleCloneMoveItem = this.handleCloneMoveItem.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  componentDidMount() {
    this.handleMoveItem()
  }

  render() {
    return (
      <ItemWrapper
        ref="drag"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <MoveIcon ref="dragBtn" style={this.state.dragBtn}>
          <Icon type="drag" />
        </MoveIcon>
        {this.props.children}
      </ItemWrapper>
    )
  }

  /**
   * 鼠标进入drag事件
   */
  handleMouseEnter () {
    console.log('进入了。。。')
    this.setState(() => ({
      dragBtn: {
        display: 'block'
      }
    }))
  }

  /**
   * 鼠标离开drag事件
   */
  handleMouseLeave () {
    console.log('离开了。。。')
    this.setState(() => ({
      dragBtn: {
        display: 'none'
      }
    }))
  }

  /**
   * 移动DOM
   */
  handleMoveItem() {
    const drag = this.refs.drag;
    const dragBtn = this.refs.dragBtn;
    const _self = this;
    // 鼠标按下
    dragBtn.onmousedown = function (e) {
      // 克隆目标元素
      const cloneDrag = _self.handleCloneMoveItem(drag);
      const diffX = e.clientX - drag.offsetLeft;
      const diffY = e.clientY - drag.offsetTop;
      console.log(diffX, diffY);
      // 鼠标移动
      cloneDrag.onmousemove = function (e) {
        const left = e.clientX - diffX;
        const top = e.clientY - diffY;
        cloneDrag.style.left = left + 'px';
        cloneDrag.style.top = top + 'px';
      };

      // 鼠标放开
      cloneDrag.onmouseup = function (e) {
        // drag.onmousedown = null
        drag.onmousemove = null
        cloneDrag.onmousemove = null
        document.body.removeChild(cloneDrag)
        console.log('结束移动。。。');
        // 判断鼠标是否在某个区域内
        console.log('放开鼠标时的坐标：', e.clientX, e.clientY);
        // drag.parentNode.removeChild(drag)
        _self.handleMoveUp(e, drag)
      };
    }
  }

  /**
   * 克隆移动目标DOM
   */
  handleCloneMoveItem(drag) {
    // 深度克隆
    const cloneDrag = drag.cloneNode(true);
    cloneDrag.setAttribute('style',
      `position: fixed;
        width: ${drag.offsetWidth}px;
        height: ${drag.offsetHeight}px;
        left: ${drag.offsetLeft}px;
        top: ${drag.offsetTop}px;
      `
    );
    document.body.appendChild(cloneDrag)
    return cloneDrag
  }

  /**
   * 鼠标放开
   */
  handleMoveUp(e, cloneDrag) {
    this.props.handleMoveUp(e, cloneDrag)
  }

}

export default SourceItem
