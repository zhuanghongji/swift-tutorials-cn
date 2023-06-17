import React, { PropsWithChildren } from "react"

type ScreenshotBlockProps = PropsWithChildren<{
  src: any
  srcRight?: any
}>

export default function ScreenshotBlock({ children, src, srcRight }: ScreenshotBlockProps) {
  let width = 240
  if (srcRight) {
    width = 180
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
