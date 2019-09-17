import React from 'react';
import { Input } from 'antd'
import { LogoWrapper } from './style'

const { Search } = Input

function Logo() {
  return (
    <LogoWrapper>
      <Search
        placeholder="搜索关键词"
        onSearch={value => console.log(value)}
        style={{ width: 180 }}
      />
    </LogoWrapper>
  );
}

export default Logo;