import React from 'react'
import styles from './discover.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Navigate a refined collection of literature, learning, and leisure ─</h1>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.singCard}>
          <Image className={styles.image} src="/book1.jpg" width={300} height={300} alt=''/>
          <h1>Book Title</h1>
          <p>Book desc</p>
          <button>READ ➜</button>
        </div>

         <div className={styles.singCard}>
          <Image className={styles.image} src="/book2.jpg" width={300} height={300} alt=''/>
          <h1>Book Title</h1>
          <p>Book desc</p>
          <button>READ ➜</button>
        </div>

         <div className={styles.singCard}>
          <Image className={styles.image} src="/book3.jpg" width={300} height={300} alt=''/>
          <h1>Book Title</h1>
          <p>Book desc</p>
          <button>READ ➜</button>
        </div>

         <div className={styles.singCard}>
          <Image className={styles.image} src="/book4.jpg" width={300} height={300} alt=''/>
          <h1>Book Title</h1>
          <p>Book desc</p>
          <button>READ ➜</button>
        </div>

        <div className={styles.singCard}>
          <Image className={styles.image} src="/book1.jpg" width={300} height={300} alt=''/>
          <h1>Book Title</h1>
          <p>Book desc</p>
          <button>READ ➜</button>
        </div>

          <div className={styles.singCard}>
          <Image className={styles.image} src="/book3.jpg" width={300} height={300} alt=''/>
          <h1>Book Title</h1>
          <p>Book desc</p>
          <button>READ ➜</button>
        </div>
          </div>
    </div>
  )
}

export default page