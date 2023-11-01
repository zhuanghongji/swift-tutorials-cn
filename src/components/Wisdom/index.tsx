import React from 'react'

interface WisdomProps {
  words: string
  author: string
}

export default function Wisdom({ words, author }: WisdomProps) {
  return (
    <>
      <div
        style={{
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          borderRadius: '0.5rem',
          backgroundColor: '#333333',
        }}
      >
        <p>{words}</p>
        {`— ${author}`}
      </div>
      <br />
    </>
  )
}
