import React from 'react'
import { ItemWrapper } from './style'

class SourceItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      drag: ''
    };

    this.handleMoveItem = this.handleMoveItem.bind(this)
    this.handleCloneMoveItem = this.handleCloneMoveItem.bind(this)
  }

  componentDidMount() {
    this.handleMoveItem()
  }

  render () {
    return (
      <ItemWrapper
        ref="drag"
      ><div>item</div></ItemWrapper>
    )
  }

  /**
   * 移动DOM
   */
  handleMoveItem () {
    // const drag = document.getElementById('drag');
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
      document.onmousemove = function (e) {
        console.log('移动中。。。');
        const left = e.clientX - diffX;
        const top = e.clientY - diffY;
        cloneDrag.style.left = left + 'px';
        cloneDrag.style.top = top + 'px';
      }

      // 鼠标弹开
      document.onmouseup = function (e) {
        document.onmousedown = null
        document.onmousemove = null
        console.log('结束移动。。。');
      }
    }
  }

  /**
   * 克隆移动目标DOM
   */
  handleCloneMoveItem (drag) {
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
    console.log(drag);
    console.log(cloneDrag);
    return cloneDrag
  }
}

export default SourceItem
