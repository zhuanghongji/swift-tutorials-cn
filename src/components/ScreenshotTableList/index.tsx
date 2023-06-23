import React, { useMemo } from "react"
import ScreenshotTable from '../ScreenshotTable'

const COLUMN = 4

type Item = {
  title?: string 
  src: any
}

type ScreenshotTableListProps = {
  data: Item[]
  size: number
}

export default function ScreenshotTableList({ data, size = 160 }: ScreenshotTableListProps) {

  const itemsList = useMemo(() => {
    const result: Item[][] = []
    let lastItems: Item[] = []
    for (const item of data) {
      if (lastItems.length === COLUMN) {
        result.push(lastItems)
        lastItems = []
      }
      lastItems.push(item)
    }
    if (lastItems && lastItems.length > 0) {
      result.push(lastItems)
    }
    return result
  }, [data]) 

  return itemsList.map((items, index) => {
    const firstTitle = items[0]?.title ?? '--'
    return (
      <ScreenshotTable key={`${index}_${firstTitle}`} data={items} size={size} />
    )
  });
}
