import React from 'react'
import styles from '../../styles/Footer.module.scss'
import Text from '../text/Text'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.title}>Food Gala</h1>
      <Text>Find the perfect meal recipe for you</Text>
      <Text className={styles.copyright}>
        © “Food Gala” 2022 All right reserved. Designed and developed by <Link href="http://aatikahakim90@gmail.com"> Aatika Hakim </Link>
      </Text>
    </footer>
  )
}

export default Footer
