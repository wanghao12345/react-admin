import styled from "styled-components";

export const PanelWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    &:hover{
        box-shadow: 0px 0px 5px #dedede;
    }
    &.slide-enter{
      transition: all .2s ease-out;
    }
    &.slide-enter-active{
      position: absolute;
      left: 0;
      top: 0;
    }
    &.slide-enter-done{
      position: absolute;
      left: 0;
      top: 0;
    }
    &.slide-exit{
      transition: all .2s ease-out;
    }
    &.slide-exit-active{
      
    }
    &.slide-exit-done{
     
    }
`;
export const PanelTopWrapper = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 40px;
    box-sizing: border-box;
    padding: 0 10px;
`;
export const PanelTitle = styled.h3`
    font-size: 15px;
`;
export const PanelBottomWrapper = styled.div`
    width: 100%;
    flex: 1;
`;