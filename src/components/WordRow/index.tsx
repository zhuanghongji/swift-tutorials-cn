import React, { PropsWithChildren } from "react"

export interface WordRowProps {
  value: string 
  symbol: string
  paraphrase: string
  sentence: string
}

export default function WordRow({ value, symbol, paraphrase, sentence }: WordRowProps) {
  return (
      <tr>
        <td>{value}</td>
        <td>{`[ ${symbol} ]`}</td>
        <td>{paraphrase}</td>
        <td>{sentence}</td>
      </tr>
  )
}

