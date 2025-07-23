import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Welcome to ➜ Leaf & Line where every page opens a new world.</h1>
        <p>Explore top reads, reviews, and stories that inspire and ignite your imagination.</p>
        <div className={styles.button}>
          <button >
            Get Started
          </button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.image} src="/logo.jpg" alt='' width={450} height={350} />
      </div>
    </div>
  )
}

export default page