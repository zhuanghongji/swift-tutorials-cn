import React from "react"
import './index.module.css'

type Item = {
  title: string 
  src: any
}

type ScreenshotTableProps = {
  data: Item[]
  size: number
}

export default function ScreenshotTable({ data, size = 160 }: ScreenshotTableProps) {

  return (
    <table>
      <thead>
        {
          data.map((item, index) => {
            const { title, src } = item 
            return <td key={`${index}_${title}`}>{title}</td>
          })
        }
      </thead>
      <tbody>
        {
          data.map((item, index) => {
            const { title, src } = item 
            return <td key={`${index}_${title}`}><img src={src} width={size} /></td>
          })
        }
      </tbody>
    </table>
  );
}
