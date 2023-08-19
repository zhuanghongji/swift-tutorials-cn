import React, { PropsWithChildren } from 'react'
import Image from '@theme/IdealImage'
import styles from './styles.module.css'

const MIN_SIZE = 180
const MAX_SIZE = 180

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
          <Image style={{ width }} img={src} />
          {srcBottom ? <Image style={{ width, marginTop: 14 }} img={srcBottom} /> : null}
        </div>
        {srcRight ? ( 
          <div style={{ marginLeft: 14 }}>
            <Image style={{ width }} img={srcRight} />
          </div>
        ) : null}
      </div>
      <br />
    </>
  );
}
