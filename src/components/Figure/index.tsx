import React from 'react'
import Image from '@theme/IdealImage'

type ScreenshotProps = {
  src: any
  num: string 
  desc: string
  size?: number
}

/**
 * 图书插图
 */
export default function Figure({ src, num, desc, size  }: ScreenshotProps) {
  // let width: string | number = '100%'
  let width: string | number = 720
  if (typeof size === 'number') {
    width = size
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width }} img={src} />
        <p style={{ marginTop: '0.5rem', fontSize: '1.0rem' }}><em>{`图 ${num} ${desc}`}</em></p>
    </div>
  )
}
