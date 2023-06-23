import React from "react"
import './index.module.css'

type Item = {
  title?: string 
  src: any
}

type ScreenshotTableProps = {
  headDisabled?: boolean
  data: Item[]
  size: number
}

export default function ScreenshotTable({ headDisabled = false, data, size = 160 }: ScreenshotTableProps) {

  return (
    <table>
      {headDisabled ? null : (
        <thead>
        {
          data.map((item, index) => {
            const { title = '', src } = item 
            return <td key={`${index}_${title}`}>{title}</td>
          })
        }
      </thead>
      )}
      
      <tbody>
        {
          data.map((item, index) => {
            const { title = '', src } = item 
            return <td key={`${index}_${title}`}><img src={src} width={size} /></td>
          })
        }
      </tbody>
    </table>
  );
}
