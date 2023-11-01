import React from 'react'

interface TodoProps {
  desc: string
}

export default function Todo({ desc }: TodoProps) {
  return (
    <>
      <br />
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
        {`TODO: ${desc}`}
      </div>
      <br />
    </>
  )
}
