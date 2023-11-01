import React, { PropsWithChildren } from 'react'
import Admonition from '@theme/Admonition'

type ExperimentBlockProps = PropsWithChildren<{}>

export default function ExperimentBlock({ children }: ExperimentBlockProps) {
  return (
    <div>
      <Admonition type="note" title="实践">
        <details>
          {React.Children.map(children, (child, index) => {
            if (index !== 0) {
              return child
            }
            if (React.isValidElement(child) && child.props.children) {
              return (
                <>
                  <summary>{child.props.children}</summary>
                  <br />
                </>
              )
            }
            return <summary>{child}</summary>
          })}
        </details>
      </Admonition>
      <br />
    </div>
  )
}
