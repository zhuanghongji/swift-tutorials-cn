import React from 'react'

export interface WordRowProps {
  value: string 
  symbol: string
  paraphrase: string
  sentence: string
}

export default function WordRow({ value, symbol, paraphrase, sentence }: WordRowProps) {
  return (
      <tr>
        <td style={{ width: '10rem' }}>{value}</td>
        <td style={{ width: '10rem' }}>{`[ ${symbol} ]`}</td>
        <td style={{ width: '10rem' }}>{paraphrase}</td>
        <td>{sentence}</td>
      </tr>
  )
}

