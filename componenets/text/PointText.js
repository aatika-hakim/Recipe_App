import React from 'react'
import clsx from 'clsx'
import Text from './Text'
import styles from '../../styles/PointText.module.scss'

function PointText({ children, className }) {
  return (
    <div className={clsx(styles.pointText, className)}>
      <div className={styles.circle} />
      <Text className={styles.text}>{children}</Text>
    </div>
  )
}

export default PointText
