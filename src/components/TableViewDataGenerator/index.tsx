import React, { useMemo } from 'react'

// 一行的个数
const INPUT_LINE_NUM = 3

// 在一行中要进行换行，用 \t 代替，解析时会自动替换成 \n
const INPUT_TEXT = `
Convert From 
To 
Conversion Rule 

32-bit signed integer 
8-bit signed integer 
result = convert_char_saturate(val) 

32-bit signed integer 
16-bit signed integer 
result = convert_short_saturate(val) 

32-bit unsigned integer 
8-bit unsigned integer 
result = convert_uchar_saturate(val) 

32-bit unsigned integer 
16-bit unsigned integer 
result = convert_ushort_saturate(val) 
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
