import React from 'react'
import Image from '@theme/IdealImage'

type ScreenshotProps = {
  src: any
  num: string
  desc: string
  size?: number
  edge?: 'white' | 'black'
}

/**
 * 图书插图
 */
export default function Figure({ src, num, desc, size, edge }: ScreenshotProps) {
  // let width: string | number = '100%'
  let width: string | number = 720
  if (typeof size === 'number') {
    width = size
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {edge ? (
        <div
          style={{ width, padding: '1rem', backgroundColor: edge === 'white' ? 'white' : 'black' }}
        >
          <Image style={{ width: '100%' }} img={src} />
        </div>
      ) : (
        <Image style={{ width }} img={src} />
      )}
      {num && desc ? (
        <p style={{ marginTop: '0.5rem', fontSize: '1.0rem' }}>
          <em>{`图 ${num} ${desc}`}</em>
        </p>
      ) : (
        <p></p>
      )}
    </div>
  )
}
