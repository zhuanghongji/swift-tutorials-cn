import React, { useMemo } from 'react'

// 一行的个数
const INPUT_LINE_NUM = 2

// 在一行中要进行换行，用 \t 代替，解析时会自动替换成 \n
const INPUT_TEXT = `
Function 
Description 

P bezier(Ps_t, P p0, P p1, P p2) 
Returns the position on a quadratic Bézier curve 

P bezier_derivative(Ps_t, P p0, P p1, P p2) 
Returns the first derivative on a quadratic Bézier curve 

P bezier_second_derivative(Ps_t, P p0, P p1, P p2) 
Returns the second derivative on a quadratic Bézier curve 

P bezier(Ps_t, P p0, P p1, P p2, P p3) 
Returns the position on a cubic Bézier curve 

P bezier_derivative(Ps_t, P p0, P p1, P p2, P p3) 
Returns the first derivative on a cubic Bézier curve 

P bezier_second_derivative(Ps_t, P p0, P p1, P p2, P p3) 
Returns the second derivative on a cubic Bézier curve 

P bspline(Ps_t, P p0, P p1, P p2) 
Returns the position on a quadratic B-spline curve 

P bspline_derivative(Ps_t, P p0, P p1, P p2) 
Returns the first derivative on a quadratic B-spline curve 

P bspline_second_derivative(Ps_t, P p0, P p1, P p2) 
Returns the second derivative on a quadratic B-spline curve 

P bspline(Ps_t, P p0, P p1, P p2, P p3) 
Returns the position on a cubic B-spline curve 

P bspline_derivative(Ps_t, P p0, P p1, P p2, P p3) 
Returns the first derivative on a cubic B-spline curve 

P bspline_second_derivative(Ps_t, P p0, P p1, P p2, P p3) 
Returns the second derivative on a cubic B-spline curve 

P hermite(Ps_t, P p0, P p1, P m0, P m1) 
Returns the position on a cubic Hermite curve 

P hermite_derivative(Ps_t, P p0, P p1, P m0, P m1) 
Returns the first derivative on a cubic Hermite curve 

P hermite_second_derivative(Ps_t, P p0, P p1, P m0, P m1) 
Returns the second derivative on a cubic Hermite curve 

P catmull_rom(Ps_t, P p0, P p1, P p2, P p3) 
Returns the position on a Catmull-Rom curve 

P catmull_rom_derivative(Ps_t, P p0, P p1, P p2, P p3) 
Returns the first derivative on a Catmull-Rom curve 

P catmull_rom_second_derivative(Ps_t, P p0, P p1, P p2, P p3) 
Returns the second derivative on a Catmull-Rom curve
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
