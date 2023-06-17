import React, { PropsWithChildren } from "react"

type ScreenshotProps = {
  src: any
  size: string | number
}

export default function Screenshot({ src, size  }: ScreenshotProps) {
  let width = 160 
  if (typeof size === 'number') {
    width = size
  } else if (size === 'm') {
    width = 480
  }
  return (
    <>
      <img src={src} width={width} />
      <br />
      <br />
    </>
  );
}
