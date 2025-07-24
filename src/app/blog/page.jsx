import React from 'react'
import styles from './Blog.module.css'
import Image from 'next/image'

const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blogPost}>
                <div className={styles.blogImage}>
                    <Image src="/blog1.jpg" width={300} height={200} alt='' />
                </div>
                <div className={styles.textContainer}>
                    <h1>The Reader’s Nook</h1>
                    <p>Discover curated book recommendations, timeless literary insights, and thoughtful reflections on reading. Whether you’re a seasoned bibliophile or just starting your journey, this space celebrates the stories that shape us.</p>
                    <div className={styles.readButton}>
                        <button>Read more ➜ </button>
                    </div>
                </div>
            </div>

            <div className={styles.blogPost}>
                <div className={styles.blogImage}>
                    <Image src="/blog2.jpg" width={300} height={200} alt='' />
                </div>
                <div className={styles.textContainer}>
                    <h1>Between the Lines </h1>
                    <p>Explore the world behind your favorite books. From author spotlights and genre deep-dives to hidden literary gems, our blog reveals the magic that happens between the pages. </p>
                    <div className={styles.readButton}>
                        <button>Read more ➜ </button>
                    </div>
                </div>
            </div>

            <div className={styles.blogPost}>
                <div className={styles.blogImage}>
                    <Image src="/blog3.jpg" width={300} height={200} alt='' />
                </div>
                <div className={styles.textContainer}>
                    <h1>Shelf Stories</h1>
                    <p>Every book holds a story — not just in its pages, but in how it reaches our shelves. Follow reviews, reader favorites, and behind-the-scenes tales of how we choose the books we love to share.</p>
                    <div className={styles.readButton}>
                        <button>Read more ➜ </button>
                    </div>
                </div>
            </div>

            <div className={styles.blogPost}>
                <div className={styles.blogImage}>
                    <Image src="/blog4.jpg" width={300} height={200} alt='' />
                </div>
                <div className={styles.textContainer}>
                    <h1>Lit & Leaf</h1>
                    <p>Rooted in a passion for reading, Lit & Leaf is your digital garden of literary thought. Find calm in bookish musings, seasonal reads, and reflections that grow alongside your reading life. </p>
                    <div className={styles.readButton}>
                        <button>Read more ➜ </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page