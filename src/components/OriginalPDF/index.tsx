import React from 'react'

interface OrigninalPDFProps {
  title: string
}

export default function OriginalPDF({ title }: OrigninalPDFProps) {
  return (
    <>
      <div
        style={{
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '1.5rem',
          paddingBottom: '0.5rem',
          borderRadius: '0.5rem',
          backgroundColor: '#333333',
        }}
      >
        {/* <p>原文：<a href="https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf">Metal-Shading-Language-Specification</a> - {title}</p> */}
        <p>
          原文：
          <a href="https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf">
            Metal Shading Language Specification - Version 3.1
          </a>
        </p>
        <blockquote>{title}</blockquote>
      </div>
      <br />
    </>
  )
}
