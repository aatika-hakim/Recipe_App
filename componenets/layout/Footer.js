import React from 'react'
import styles from '../../styles/Footer.module.scss'
import Text from '../text/Text'

function Footer() {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.title}>Food Gala</h1>
      <Text>Find the perfect meal recipe for you</Text>
      <Text className={styles.copyright}>
        © “My-Meals” 2022 All right reserved.
      </Text>
    </footer>
  )
}

export default Footer
