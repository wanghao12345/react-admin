import React from 'react'
import SourceItem from '@/components/SourceItem'
import {
  PieWrapper,
  OptionWrapper,
  ShowWrapper,
  OptionItemWrapper,
  TitleWrapper,
  ContentWrapper
} from './style'

function Pie() {
  return (
    <PieWrapper>
      <OptionWrapper>
        <OptionItemWrapper>
          <TitleWrapper>编辑数据</TitleWrapper>
          <ContentWrapper>
            <SourceItem></SourceItem>
            <SourceItem></SourceItem>
          </ContentWrapper>
        </OptionItemWrapper>
        <OptionItemWrapper>
          <TitleWrapper>添加数据</TitleWrapper>
        </OptionItemWrapper>
      </OptionWrapper>
      <ShowWrapper>

      </ShowWrapper>
    </PieWrapper>
  )
}


export default Pie
