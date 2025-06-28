import styles from './hero.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/site/people.jpg'
          alt='image alt'
          width={300}
          height={300}
        />
      </div>
      <h1>Hello World XD !!</h1>
      <p>Hosted blogs and record the memories </p>
    </section>
  )
}
