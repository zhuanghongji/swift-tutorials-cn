import React, { PropsWithChildren } from 'react'

type TableWrapperProps = PropsWithChildren<{
  num: string 
  title: string
}>

/**
 * 表格容器
 */
export default function TableWrapper({ num, title, children  }: TableWrapperProps) {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <center>
        {children}
      </center>
      <div><strong>{`Table ${num} - ${title}`}</strong></div>
      <br/>
    </div>
  )
}
