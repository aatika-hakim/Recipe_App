import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Button.module.scss'

function ButtonWithLink({ link = '/', children, variant = 'secondary' }) {
  return (
    <Link href={link}>
      <a
        type="button"
        className={`${styles.button} ${styles[`variant__${variant}`]}`}
      >
        {children}
      </a>
    </Link>
  )
}
function Button({
  children,
  variant = 'secondary',
  className,
  onClickHandler,
}) {
  return (
    <button
      type="button"
      className={clsx(styles.button, styles[`variant__${variant}`], className)}
      onClick={onClickHandler}
    >
      {children}
    </button>
  )
}

export default ButtonWithLink
export { Button }
