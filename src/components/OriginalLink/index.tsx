import React from "react"
import Admonition from '@theme/Admonition';

interface OriginalLinkProps {
  title: string
  value: string
}

export default function OriginalLink({ title, value }: OriginalLinkProps) {
  return (
    <div>
      <Admonition type="note" title={title}>
        <p>原文：<a href={value}>{value}</a></p>
      </Admonition>
      <br />
    </div>
  )
}
