import React from 'react'
import Text from '../text/Text'
import Title from '../text/Title'
import Image from 'next/image'
import styles from '../../styles/Ingrediants.module.scss'
var url = ''
function Ingredients({ ingredientsWithMeasures }) {
  return (
    <>
      <Title className={styles.title}>Ingredients</Title>

      {ingredientsWithMeasures.map(
        (ingredient) => (
          (url = `https://www.themealdb.com/images/ingredients/${ingredient.ingredient}.png`),
          (
            <div className={styles.ingdiv}>
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
                 ( {ingredient.measure} )
                </Title>
              </div>
            </div>
          )
        ),
      )}
    </>
  )
}

export default Ingredients
