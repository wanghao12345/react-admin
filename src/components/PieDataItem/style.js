import styled from 'styled-components'

export const PieDataWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    height: 100%;
    border: 0;
    background: rgba(0,0,0,0);
  }
  input.label {
    width: 70%;
    text-align: left;
  }
  input.value {
    width: 30%;
    text-align: right;
  }
`;
