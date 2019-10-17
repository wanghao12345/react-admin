import styled from 'styled-components'

export const ItemWrapper = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #03A9F4;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 0 2px #03a9f4;
  margin-bottom: 10px;
  position: relative;
`;

export const MoveIcon = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 50%;
  top: 50%;
  margin-right: -10px;
  margin-top: -16px;
  font-size: 20px;
  z-index: 999;
  cursor: move;
`;

