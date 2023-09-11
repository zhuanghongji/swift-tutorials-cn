import React from 'react'
import Admonition from '@theme/Admonition';

interface Props {
  status?: 'translated'
}

export default function ToBePolishedAfterTranslated({ status = 'translated' }: Props) {
  return (
    <div>
    <Admonition type="caution">
      <p>该文档目前仅完成 Google 翻译，需进一步校对和润色。</p>
    </Admonition>
  </div>
  )
}
