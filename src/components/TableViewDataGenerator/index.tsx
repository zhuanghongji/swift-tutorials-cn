import React, { useMemo } from 'react'

// 一行的个数
const INPUT_LINE_NUM = 2

// 在一行中要进行换行，用 \t 代替，解析时会自动替换成 \n
const INPUT_TEXT = `
Member variable 
Description 

uint max_vertices 
The maximum number of vertices in the mesh (NV). 

uint max_primitive 
The maximum number of primitives in the mesh (NP). 

uint indices_per_primitive 
The number of indices per primitive based on topology t.  

uint max_indices 
The maximum number of indices (max_primitive * indices_per_primitive). 
`

/**
 * 表格视图 datasList 生成器
 */
export default function TableViewDataGenerator() {
  const datasLists = useMemo(() => {
    const result: string[][] = []
    let datas: string[] = []
    INPUT_TEXT.split('\n').map(v => v.trim().replace(/\t/g, '\n')).filter(v => v ? true : false).forEach(v => {
      if (datas.length === INPUT_LINE_NUM) {
        result.push(datas)
        datas = []
      }
      datas.push(v)
    })
    result.push(datas)
    return result
  }, [])

  const datasListsText = useMemo(() => {
    const items: string[] = []
    datasLists.forEach(v => {
      items.push(`${JSON.stringify(v)},`)
    });
    return items.join('\n')
  }, [datasLists])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <br/>
      <p style={{ whiteSpace: 'pre-line'}}>{datasListsText}</p>
      <br/>
    </div>
  )
}
