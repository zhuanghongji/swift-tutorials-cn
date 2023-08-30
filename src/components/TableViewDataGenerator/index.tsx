import React, { PropsWithChildren, useMemo } from 'react'

const INPUT_LINE_NUM = 4
const INPUT_TEXT = `
r8unorm<T>
half or float
1
1
r8snorm<T>
half or float
1
1
r16unorm<T>
float
2
2
`

/**
 * 表格视图 datasList 生成器
 */
export default function TableViewDataGenerator() {
  const datasLists = useMemo(() => {
    const result: string[][] = []
    let datas: string[] = []
    INPUT_TEXT.split('\n').map(v => v.trim()).filter(v => v ? true : false).forEach(v => {
      if (datas.length === INPUT_LINE_NUM) {
        result.push(datas)
        datas = []
      }
      datas.push(v)
    })
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
