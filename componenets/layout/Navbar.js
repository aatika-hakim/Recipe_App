import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.scss'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.title}>
          <h1>Food Gala</h1>
        </a>
      </Link>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/savedMeals">Saved List</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
