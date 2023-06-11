import React from "react"
import styles from './styles.module.css'

interface BadgeProps {
  type?: 'info' | 'tip' | 'warning' | 'danger' 
  text: string
}

function Badge({ type = 'tip', text }: BadgeProps) {
  return (
    <span className={`${styles.VPBadge} ${styles[type]}`}>{text}</span>
  )
}

export default Badge