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
      />
    </LogoWrapper>
  );
}

export default Logo;