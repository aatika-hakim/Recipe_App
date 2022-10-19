import clsx from 'clsx'
import React from 'react'
import styles from '../../styles/Text.module.scss'

function Text({ children, className }) {
  return <p className={clsx(styles.text, className)}>{children}</p>
}

export default Text
