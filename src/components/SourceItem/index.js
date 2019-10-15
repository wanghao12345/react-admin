import React from 'react'
import { ItemWrapper } from './style'

class SourceItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleMoveItem = this.handleMoveItem.bind(this)
    this.handleCloneMoveItem = this.handleCloneMoveItem.bind(this)
  }

  componentDidMount() {
    this.handleMoveItem()
  }

  render() {
    return (
      <ItemWrapper
        ref="drag"
      >
        <div>item</div>
      </ItemWrapper>
    )
  }

  /**
   * 移动DOM
   */
  handleMoveItem() {
    const drag = this.refs.drag;
    const _self = this
    // 鼠标按下
    drag.onmousedown = function (e) {
      // 克隆目标元素
      const cloneDrag = _self.handleCloneMoveItem(drag);
      const diffX = e.clientX - drag.offsetLeft;
      const diffY = e.clientY - drag.offsetTop;
      console.log(diffX, diffY);

      // 鼠标移动
      cloneDrag.onmousemove = function (e) {
        console.log('鼠标的坐标：', e.clientX, e.clientY);
        const left = e.clientX - diffX;
        const top = e.clientY - diffY;
        cloneDrag.style.left = left + 'px';
        cloneDrag.style.top = top + 'px';
      }

      // 鼠标放开
      cloneDrag.onmouseup = function (e) {
        // drag.onmousedown = null
        cloneDrag.onmousemove = null
        document.body.removeChild(cloneDrag)
        console.log('结束移动。。。');
        // 判断鼠标是否在某个区域内
        _self.handleMoveUp(cloneDrag)
      }
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
  handleMoveUp(cloneDrag) {
    this.props.handleMoveUp(cloneDrag)
  }
}

export default SourceItem
