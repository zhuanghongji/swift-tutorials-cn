import React from "react"

type Src = any

type ScreenshotTableProps = {
  data: Src[]
  size: number
}

export default function Screenshots({ data, size = 160 }: ScreenshotTableProps) {
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      {
        data.map((src, index) => {
          return <img key={`${index}`} style={{ marginLeft: index === 0 ? 0 : 14 }} src={src} width={size} />
        })
      }
    </div>
  )
}
