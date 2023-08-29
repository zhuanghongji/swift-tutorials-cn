import React, { PropsWithChildren } from 'react'

type ScreenshotProps = PropsWithChildren<{
  num: string 
  title: string
}>

/**
 * 表格容器
 */
export default function TableWrapper({ num, title, children  }: ScreenshotProps) {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <center>
        {children}
      </center>
      <div><strong>{`表 ${num} - ${title}`}</strong></div>
      <br/>
    </div>
  )
}
