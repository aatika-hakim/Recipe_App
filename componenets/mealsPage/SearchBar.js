import React from 'react'
import styles from '../../styles/SearchBar.module.scss'

function SearchBar({ searchText, setSearchText }) {
  return (
    <input
      placeholder="Search Meals"
      className={styles.input}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  )
}

export default SearchBar
