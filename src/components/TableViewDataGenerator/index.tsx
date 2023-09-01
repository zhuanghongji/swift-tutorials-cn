import React, { useMemo } from 'react'

// 一行的个数
const INPUT_LINE_NUM = 2

// 在一行中要进行换行，用 \t 代替，解析时会自动替换成 \n
const INPUT_TEXT = `
Built-in Geometric Functions 
Description 

T cross(T x, T y)  
Return the cross product of x and y.  \tT needs to be a 3-component vector type. 

Ts distance(T x, T y) 
Return the distance between x and y, which is length(x-y) 

Ts distance_squared(T x, T y) 
Return the square of the distance between x and y. 

Ts dot(T x, T y) 
Return the dot product of x and y,  which is x[0] * y[0] + x[1] * y[1] + … T faceforward(T N, T I, T Nref) If dot(Nref, I) < 0.0 return N, otherwise return -N. 

Ts length(T x) 
Return the length of vector x, which is sqrt(x[0]2 + x[1]2 + ...) 

Ts length_squared(T x) 
Return the square of the length of vector x,  which is (x[0]2 + x[1]2 + ...) 

T normalize(T x) 
Return a vector in the same direction as x but with a length of 1. 

T reflect(T I, T N) 
For the incident vector I and surface orientation N, compute normalized N (NN), and return the reflection direction: I - 2 * dot(NN, I) * NN.  

T refract(T I, T N, Ts eta) 
For the incident vector I and surface normal N, and the ratio of indices of refraction eta, return the refraction vector. \tThe input parameters for the incident vector I and the surface normal N needs to already be normalized to get the desired results. 
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
