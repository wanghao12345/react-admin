import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
export const PanelWrapper = styled.div`
    flex: 1;
    height: 100%;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #dedede;
    margin: 10px;
`;
export const PanelTopWrapper = styled.div`
    width: 100%;
    height: 40px;
    text-align: right;
    line-height: 40px;
    box-sizing: border-box;
    padding: 0 10px;
    .fullscreen{
      cursor: pointer;
    }
`;