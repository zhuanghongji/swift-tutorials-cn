import React, { PropsWithChildren } from 'react'
import Admonition from '@theme/Admonition'

type ImportantBlockProps = PropsWithChildren<{}>

export default function ImportantBlock({ children }: ImportantBlockProps) {
  return (
    <div>
      <Admonition type="caution" title="重要">
        {children}
      </Admonition>
      <br />
    </div>
  )
}
