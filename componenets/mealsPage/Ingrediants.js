import React from 'react'
import Text from '../text/Text'
import Title from '../text/Title'
import styles from '../../styles/Ingrediants.module.scss';

function Ingredients({ ingredientsWithMeasures }) {
  return (
    <>
      <Title className={styles.title}>Ingredients</Title>
      <table className={styles.ingredientsTable}>
        <tbody>
          {ingredientsWithMeasures.map((ingredient) => (
            <tr key={ingredient.index}>
              <td>
                <Text>{ingredient.ingredient}</Text>
              </td>
              <td>
                <Text>{ingredient.measure}</Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Ingredients
