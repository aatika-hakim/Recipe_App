import React from 'react'
import Image from 'next/image'
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
          <Text>A listing website of meal recipe</Text>
          <div className={styles.hero_buttons}>
            <ButtonWithLink link="/meals" variant="primary">
              Explore Meals
            </ButtonWithLink>
            <ButtonWithLink link="/savedMeals">Saved Meals</ButtonWithLink>
          </div>
        </div>
        <div className={styles.hero_img}>
          <Image
            src="/public/recipe.png"
            alt="Meals"
            height="300"
            width="300"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
