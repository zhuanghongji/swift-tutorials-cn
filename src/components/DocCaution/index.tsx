import React from 'react'
import Admonition from '@theme/Admonition';

interface DocCautionProps {
  status?: 'translated'
}

export default function DocCaution({ status = 'translated' }: DocCautionProps) {
  return (
    <div>
    <Admonition type="caution">
      <p>该文档刚完成 Google 翻译，需进一步校对和补充。</p>
    </Admonition>
  </div>
  )
}
