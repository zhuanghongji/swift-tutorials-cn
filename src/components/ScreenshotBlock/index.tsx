import React, { PropsWithChildren } from "react"
import styles from './styles.module.css'

const MIN_SIZE = 180
const MAX_SIZE = 240

type ScreenshotBlockProps = PropsWithChildren<{
  src: any
  srcRight?: any
  size?: number
  minSize?: boolean
}>

export default function ScreenshotBlock({ children, src, srcRight, size, minSize = false,}: ScreenshotBlockProps) {
  let width = MAX_SIZE
  if (size !== undefined) {
    width = size 
  } else if (srcRight || minSize) {
    width = MIN_SIZE
  }
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div className={styles.container}>
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
