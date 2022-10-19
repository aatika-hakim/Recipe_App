import clsx from 'clsx'
import React from 'react'
import styles from '../../styles/CategoryItem.module.scss'

function CategoryItem({ category, selectedCategory, onClickHandler }) {
  const isSelected = category.strCategory === selectedCategory

  return (
    <button
      type="button"
      className={clsx(styles.item, isSelected && styles.item__selected)}
      onClick={onClickHandler}
    >
      {category.strCategory}
    </button>
  )
}

export default CategoryItem
