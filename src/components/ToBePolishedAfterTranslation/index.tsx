import React from 'react'
import Admonition from '@theme/Admonition'

interface Props {
  status?: 'translated'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ToBePolishedAfterTranslated(_: Props) {
  return (
    <div>
      <Admonition type="caution">
        <p>该文档目前仅完成 Google 翻译，需进一步校对和润色。</p>
      </Admonition>
    </div>
  )
}
