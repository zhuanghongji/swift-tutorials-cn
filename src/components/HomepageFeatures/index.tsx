import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '内容清晰',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>按照官方文档结构组织内容，像查看官方文档一样浏览本指南，在两者间切换自然。</>,
  },
  {
    title: '浅显易懂',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>提供更丰富的示例代码、执行后的控制台日志和模拟器截图，以降低实践难度。</>,
  },
  {
    title: '由表及里',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>从基础用法开始，直到更深层次原理与技巧。了解它是什么、如何用、为何这样用。</>,
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
