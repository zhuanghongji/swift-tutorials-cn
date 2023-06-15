import React, { PropsWithChildren } from "react"
import WordRow, { WordRowProps } from '../WordRow'
import './index.module.css'

type WordTableProps = PropsWithChildren<{
  category: string
  rows?: WordRowProps[]
}>

export default function WordTable({ category, rows = [], children }: WordTableProps) {
  return (
    <>
      <br />
      <br />
      <div>{category}</div>
      <br />
      <table>
        <thead>
          <tr>
            <td>单词</td>
            <td>发音</td>
            <td>释义</td>
            <td>原句</td>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const { value, symbol, paraphrase, sentence } = row 
            return <WordRow key={`${index}_${value}`} value={value} symbol={symbol} paraphrase={paraphrase} sentence={sentence} />
          })}
          {children}
        </tbody>
      </table>
    </>
  )
}

