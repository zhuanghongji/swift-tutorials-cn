import React from 'react'

interface Source {
  name: string 
  url: string
}

interface ReferenceSourcesProps {
  data: Source[]
}

export default function ReferenceSources({ data }: ReferenceSourcesProps) {
  return (
    <>
      <div style={{  
        paddingLeft: '1rem', 
        paddingRight: '1rem', 
        paddingTop: '1.0rem', 
        paddingBottom: '0.5rem', 
        borderRadius: '0.5rem',
        backgroundColor: '#333333', 
       }}>
        {`参考资料：`}
        <br/>
        <ul>
        {
          data.map(({ name, url }, index) => (
            <li key={`${name}_${url}_${index}`}>
              <a href={url}>{name}</a>
            </li>
          ))
        }
        </ul>
      </div>
      <br/>
    </>
  )
}
