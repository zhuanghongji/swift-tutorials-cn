import React, { PropsWithChildren } from "react"
import styles from './styles.module.css'

const MIN_SIZE = 180
const MAX_SIZE = 240

type ScreenshotBlockProps = PropsWithChildren<{
  mini?: boolean
  src: any
  srcRight?: any
  srcBottom?: any
  size?: number
  minSize?: boolean
  
}>

export default function ScreenshotBlock({ children, mini = false, src, srcRight, srcBottom, size, minSize = false}: ScreenshotBlockProps) {
  let width = MAX_SIZE
  if (size !== undefined) {
    width = size 
  } else if (srcRight || minSize) {
    width = MIN_SIZE
  }
  if (mini) {
    width = width * 0.8
  }
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div className={styles.container}>
          {children}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 14 }}>
          <img src={src} width={width} />
          {srcBottom ? <img style={{ marginTop: 14 }} src={srcBottom} width={width} /> : null}
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
