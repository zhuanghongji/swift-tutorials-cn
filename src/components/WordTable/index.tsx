import React, { PropsWithChildren } from 'react'
import WordRow, { WordRowProps } from '../WordRow'
import styles from './index.module.css'

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
      <table className={styles.table}>
        <thead>
          <tr>
            <td className={styles.title}>单词</td>
            <td className={styles.title}>发音</td>
            <td className={styles.title}>释义</td>
            <td className={styles.title}>原句</td>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const { value, symbol, paraphrase, sentence } = row
            return (
              <WordRow
                key={`${index}_${value}`}
                value={value}
                symbol={symbol}
                paraphrase={paraphrase}
                sentence={sentence}
              />
            )
          })}
          {children}
        </tbody>
      </table>
    </>
  )
}
