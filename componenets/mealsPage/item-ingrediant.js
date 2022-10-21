import Image from 'next/image'
import React from 'react'
import Title from '../text/Title'
import styles from '../../styles/SingleMealCard.module.scss'
var url
function SingleIngrediantCard({ ingredientsWithMeasures }) {
  return ingredientsWithMeasures.map(
    (ingredient) => (
      (url = `https://www.themealdb.com/images/ingredients/${ingredient.ingredient}.png`),
      (
        <div>
          <Image
            src={url}
            height="150"
            width="150"
            alt={ingredient.ingredient}
          />
          <div className={styles.iname}>
            <Title className={styles.title} variant="secondary">
              {ingredient.ingredient}
            </Title>
            <Title className={styles.title} variant="secondary">
              {ingredient.measure}
            </Title>
          </div>
        </div>
      )
    ),
  )
}

export default SingleIngrediantCard
