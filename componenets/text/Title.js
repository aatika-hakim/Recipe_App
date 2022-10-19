import clsx from 'clsx'
import React from 'react'
import styles from '../../styles/Title.module.scss'

function Title({ children, className, variant = 'primary' }) {
  return (
    <h2 className={clsx(styles.title, className, styles[`title__${variant}`])}>
      {children}
    </h2>
  )
}

export default Title
