import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../../styles/Layout.module.scss'

function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
