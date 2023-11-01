import React from 'react'
import Image from '@theme/IdealImage'

type Src = any

type ScreenshotTableProps = {
  data: Src[]
  size: number
}

export default function Screenshots({ data, size = 160 }: ScreenshotTableProps) {
  return (
    <>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        {data.map((src, index) => {
          return (
            <Image
              key={`${index}`}
              style={{ width: size, marginLeft: index === 0 ? 0 : 14 }}
              img={src}
            />
          )
        })}
      </div>
      <br />
    </>
  )
}
