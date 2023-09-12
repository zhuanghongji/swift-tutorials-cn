import React from 'react'

interface OrigninalPDFProps {
  title: string
}

export default function OriginalPDF({ title }: OrigninalPDFProps) {
  return (
    <>
      <div style={{  
        paddingLeft: '1rem', 
        paddingRight: '1rem', 
        paddingTop: '0.5rem', 
        paddingBottom: '0.5rem', 
        borderRadius: '0.5rem',
        backgroundColor: '#333333', 
       }}>
        {`原文：${title}`}
      </div>
      <br/>
    </>
  )
}
