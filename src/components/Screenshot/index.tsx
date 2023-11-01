import React from 'react'
import Image from '@theme/IdealImage'

type ScreenshotProps = {
  src: any
  size: string | number
}

export default function Screenshot({ src, size }: ScreenshotProps) {
  let width = 160
  if (typeof size === 'number') {
    width = size
  } else if (size === 'm') {
    width = 480
  }
  return (
    <>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <Image style={{ width }} img={src} />
      </div>
      <br />
    </>
  )
}
