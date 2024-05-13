import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.scss'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
          <h1 className={styles.title}>Food Gala</h1>
        </a>
      </Link>
      <div className={styles.navLinks}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/savedMeals">Saved List</Link>
          </li>
          <li>
            <Link href="/savedMeals">About</Link>
          </li>
          <li>
            <Link href="/savedMeals">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
