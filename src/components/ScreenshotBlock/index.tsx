import React, { PropsWithChildren } from "react"

const MIN_SIZE = 180
const MAX_SIZE = 240

type ScreenshotBlockProps = PropsWithChildren<{
  src: any
  srcRight?: any
  minSize?: boolean
}>

export default function ScreenshotBlock({ children, src, srcRight, minSize = false }: ScreenshotBlockProps) {
  let width = MAX_SIZE
  if (srcRight || minSize) {
    width = MIN_SIZE
  }
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1 1 auto', flexBasis: '0', minWidth: '0', borderRadius: 6, background: '#282A3633' }}>
          {children}
        </div>
        <div style={{ marginLeft: 14 }}>
          <img src={src} width={width} />
        </div>
        {srcRight ? ( 
          <div style={{ marginLeft: 14 }}>
            <img src={srcRight} width={width} />
          </div>
        ) : null}
      </div>
      <br />
    </>
  );
}
