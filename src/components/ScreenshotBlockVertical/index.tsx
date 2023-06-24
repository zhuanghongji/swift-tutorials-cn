import React, { PropsWithChildren } from "react"

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

export default function ScreenshotBlockVertical({ children, src, srcRight, srcRightmost, size, minSize = false,}: Props) {
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
        <img src={src} width={width} />
        {srcRight ? ( 
            <img  style={{ marginLeft: MARGIN_LEFT }} src={srcRight} width={width} />
        ) : null}
        {srcRightmost ? ( 
            <img  style={{ marginLeft: MARGIN_LEFT }} src={srcRightmost} width={width} />
        ) : null}
      </div>
      <br />
    </>
  );
}
