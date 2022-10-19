import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Title from '../text/Title'
import styles from '../../styles/SingleMealCard.module.scss'

function SingleMealCard({ meal }) {
  return (
    <Link href={`/meals/${meal.idMeal}`}>
      <a className={styles.item}>
        <Image
          src={meal.strMealThumb}
          height="200"
          width="300"
          alt={meal.strMeal}
        />
        <Title className={styles.title} variant="secondary">
          {meal.strMeal}
        </Title>
      </a>
    </Link>
  )
}

export default SingleMealCard
