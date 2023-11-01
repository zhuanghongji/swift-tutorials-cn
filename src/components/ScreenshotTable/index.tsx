import React from 'react'
import Image from '@theme/IdealImage'

type Item = {
  title?: string
  src: any
}

type ScreenshotTableProps = {
  headDisabled?: boolean
  data: Item[]
  size: number
}

export default function ScreenshotTable({
  headDisabled = false,
  data,
  size = 160,
}: ScreenshotTableProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <center>
        <table>
          {headDisabled ? null : (
            <thead>
              {data.map((item, index) => {
                const { title = '' } = item
                return <td key={`${index}_${title}`}>{title}</td>
              })}
            </thead>
          )}

          <tbody>
            {data.map((item, index) => {
              const { title = '', src } = item
              return (
                <td key={`${index}_${title}`}>
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: size }}>
                      <Image style={{ width: size }} img={src} />
                    </div>
                  </div>
                </td>
              )
            })}
          </tbody>
        </table>
      </center>
    </div>
  )
}
