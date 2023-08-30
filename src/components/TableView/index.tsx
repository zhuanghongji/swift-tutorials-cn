import React, { PropsWithChildren } from 'react'

type TableViewProps = {
  num: string 
  title: string
  headers: string[]
  datasList: string[][]
}

/**
 * 表格视图
 */
export default function TableView({ num, title, headers, datasList  }: TableViewProps) {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <div><strong>{`Table ${num} - ${title}`}</strong></div>
      <br/>
      <center style={{ maxWidth: '90%' }}>
        <table>
          <thead>
            {
              headers.map((h, index) => (
                <th key={`${index}_${h}`}>{h}</th>
              ))
            }
          </thead>

          <tbody>
            {
              datasList.map((datas, index) => (
                <tr key={index}>
                  { 
                    datas.map((d, index) => (
                      <td 
                        key={`${index}_${d}`} 
                        style={{ whiteSpace: 'pre-line', minWidth: '10rem', color: index === 0 ? '#BDBDBD' : 'white' }}
                      >
                        {d}
                      </td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </center>
      <br/>
    </div>
  )
}
