import React, { PropsWithChildren } from 'react'
import MDXContent from '@theme/MDXContent';
import CodeBlock from '@theme/CodeBlock';
import './index.module.css'

type ScreenshotProps = PropsWithChildren<{
  num: string 
  title: string
  headers: string[]
  datas: string[][]
}>

/**
 * 表格容器
 */
export default function TableWrapper({ num, title, headers, datas, children  }: ScreenshotProps) {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <center>
        {children}
      </center>
    </div>
  )
}
