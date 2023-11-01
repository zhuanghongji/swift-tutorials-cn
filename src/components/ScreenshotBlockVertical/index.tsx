import React, { PropsWithChildren } from 'react'
import Image from '@theme/IdealImage'

const MIN_SIZE = 180
const MAX_SIZE = 240
const MARGIN_LEFT = 14

type Props = PropsWithChildren<{
  src: any
  srcRight?: any
  srcRightmost?: any
  size?: number
  minSize?: boolean
}>

export default function ScreenshotBlockVertical({
  children,
  src,
  srcRight,
  srcRightmost,
  size,
  minSize = false,
}: Props) {
  let width = MAX_SIZE
  if (size !== undefined) {
    width = size
  } else if (srcRight || minSize) {
    width = MIN_SIZE
  }
  return (
    <>
      {children}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Image style={{ width }} img={src} />
        {srcRight ? <Image style={{ width, marginLeft: MARGIN_LEFT }} img={srcRight} /> : null}
        {srcRightmost ? (
          <Image style={{ width, marginLeft: MARGIN_LEFT }} img={srcRightmost} />
        ) : null}
      </div>
      <br />
    </>
  )
}
