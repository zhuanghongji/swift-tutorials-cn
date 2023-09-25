import React, { useMemo } from 'react'

// 一行的个数
const INPUT_LINE_NUM = 3

// 在一行中要进行换行，用 \t 代替，解析时会自动替换成 \n
const INPUT_TEXT = `
AUv2 API
AUv3 API
描述

AudioUnitInitialize(_:)
audioUnit.allocateRenderResources()
分配音频单元所需的资源。

AudioUnitUninitialize(_:)
audioUnit.deallocateRenderResources()
释放音频单元的渲染资源。

AudioUnitRender(_:_:_:_:_:_:)
audioUnit.renderBlock
在实时上下文中渲染音频样本。

AudioUnitReset(_:_:_:)
audioUnit.reset()
重置音频单元的状态。

AudioUnitScheduleParameters(_:_:_:)
audioUnit.scheduleParameterBlock
安排对音频单元参数值的更改。

AudioUnitGetProperty(_:_:_:_:_:_:)\tAudioUnitSetProperty(_:_:_:_:_:_:)
audioUnit.propertyName
修改音频单元属性值。

AudioUnitGetParameter(_:_:_:_:_:)\tAudioUnitSetParameter(_:_:_:_:_:_:)
audioUnit.parameterTree
访问用于获取和设置参数值的参数树对象。
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
