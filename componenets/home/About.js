import React from 'react'
import Text from '../text/Text'
import Title from '../text/Title'
import styles from '../../styles/About.module.scss'
import Image from 'next/image'
import pic from '../../public/resturant.jpg'

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.info}>
          <Title className={styles.title}>About Food Gala: </Title>
          <Text className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            <br />
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages,
          </Text>
        </div>
        <div className={styles.img}>
          <Image src={pic} alt='about us' />
        </div>
      </div>
    </section>
  )
}

export default About
