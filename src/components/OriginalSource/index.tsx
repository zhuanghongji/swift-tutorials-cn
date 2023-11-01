import React from 'react'

interface Props {
  title: string
  url: string
  summary?: string
}

export default function OriginalSource({ title, url, summary }: Props) {
  // return (
  //   <div>
  //     <Admonition type="note" title="原文">
  //       <p><a href={url}>{title}</a></p>
  //       <p>{summary}</p>
  //     </Admonition>
  //     <br />
  //   </div>
  // )

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
        {/* <p>原文：</p> */}
        <p>
          原文：<a href={url}>{title}</a>
        </p>
        {summary ? (
          <blockquote>{summary.endsWith('。') ? summary : `${summary}。`}</blockquote>
        ) : null}
      </div>
      <br />
    </>
  )
}
