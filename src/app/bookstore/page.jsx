import Link from 'next/link'
import React from 'react'
import styles from './bookstore.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.heading}>
          <h1> What would you like to read today ?</h1>
        </div>
        <div className={styles.category}>
          <h3 className={styles.categoryTitle}> Top Categories, you can start from ─</h3>
          <div className={styles.categoryButtons}>
            <span>All</span>
            <button>Fiction</button>
            <button>Mystery</button>
            <button>Romance</button>
            <button>Fantasy</button>
          </div>
        </div>
      </div>
      <div className={styles.bookContainer}>

        <div className={styles.bookCard}>
          <div className={styles.cardTop}>
           <Image src="/book01.jpg" alt=''width={200} height={250} />
          <span>─FANTASY─</span>
          </div>
          <h2>Book Title</h2>
          <p>Author Name - Dostoyesvsky</p>
        </div>

          <div className={styles.bookCard}>
          <div className={styles.cardTop}>
           <Image src="/book01.jpg" alt=''width={200} height={250} />
          <span>─ROMANCE─</span>
          </div>
          <h2>Book Title</h2>
          <p>Author Name - Dostoyesvsky</p>
        </div>

        <div className={styles.bookCard}>
          <div className={styles.cardTop}>
           <Image src="/book01.jpg" alt=''width={200} height={250} />
          <span>─MYSTERY─</span>
          </div>
          <h2>Book Title</h2>
          <p>Author Name - Dostoyesvsky</p>
        </div>

        <div className={styles.bookCard}>
          <div className={styles.cardTop}>
           <Image src="/book01.jpg" alt=''width={200} height={250} />
          <span>─THRILLER─</span>
          </div>
          <h2>Book Title</h2>
          <p>Author Name - Dostoyesvsky</p>
        </div>

        <div className={styles.bookCard}>
          <div className={styles.cardTop}>
           <Image src="/book01.jpg" alt=''width={200} height={250} />
          <span>─FICTION─</span>
          </div>
          <h2>Book Title</h2>
          <p>Author Name - Dostoyesvsky</p>
        </div>

        <div className={styles.bookCard}>
          <div className={styles.cardTop}>
           <Image src="/book01.jpg" alt=''width={200} height={250} />
          <span>─FANTASY─</span>
          </div>
          <h2>Book Title</h2>
          <p>Author Name - Dostoyesvsky</p>
        </div>

        <div className={styles.bookCard}>
          <div className={styles.cardTop}>
           <Image src="/book01.jpg" alt=''width={200} height={250} />
          <span>─ROMANCE─</span>
          </div>
          <h2>Book Title</h2>
          <p>Author Name - Dostoyesvsky</p>
        </div>

        <div className={styles.bookCard}>
          <div className={styles.cardTop}>
           <Image src="/book01.jpg" alt=''width={200} height={250} />
          <span>─MYSTERY─</span>
          </div>
          <h2>Book Title</h2>
          <p>Author Name - Dostoyesvsky</p>
        </div>
        
      </div>
    </div>
  )
}

export default page