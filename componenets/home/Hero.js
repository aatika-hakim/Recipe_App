import React from 'react'
import styles from '../../styles/Hero.module.scss'
import Text from '../text/Text'
import ButtonWithLink from '../button/Button'

function Hero() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_container}>
        <div className={styles.hero_info}>
          <h1 className={styles.hero_title}>
            Find the Tasty<span>meal recipe</span> for you
          </h1>
          <Text className={styles.hero_text}>
            A listing website of meal recipe
          </Text>
          <div className={styles.hero_buttons}>
            <ButtonWithLink link="/meals" variant="primary">
              Explore Meals
            </ButtonWithLink>
            <ButtonWithLink link="/savedMeals">Saved Meals</ButtonWithLink>
            <ButtonWithLink link="/savedMeals">Home</ButtonWithLink>
            <ButtonWithLink link="/savedMeals">About</ButtonWithLink>
            <ButtonWithLink link="/savedMeals">Contact</ButtonWithLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
