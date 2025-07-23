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
                    <h1>The Reading Room</h1>
                    <p>Insights, stories, and inspiration for every kind of reader. From book recommendations and author interviews to reading tips and literary trends — explore the world behind the books.</p>
                    <div className={styles.readButton}>
                        <button>Read more ➜ </button>
                    </div>
                </div>
            </div>

            <div className={styles.blogPost}>
                <div className={styles.blogImage}>
                    <Image src="/blog1.jpg" width={300} height={200} alt='' />
                </div>
                <div className={styles.textContainer}>
                    <h1>Blog title</h1>
                    <p>Blog description</p>
                    <div className={styles.readButton}>
                        <button>Read more ➜ </button>
                    </div>
                </div>
            </div>

            <div className={styles.blogPost}>
                <div className={styles.blogImage}>
                    <Image src="/blog1.jpg" width={300} height={200} alt='' />
                </div>
                <div className={styles.textContainer}>
                    <h1>Blog title</h1>
                    <p>Blog description</p>
                    <div className={styles.readButton}>
                        <button>Read more ➜ </button>
                    </div>
                </div>
            </div>

            <div className={styles.blogPost}>
                <div className={styles.blogImage}>
                    <Image src="/blog1.jpg" width={300} height={200} alt='' />
                </div>
                <div className={styles.textContainer}>
                    <h1>Blog title</h1>
                    <p>Blog description</p>
                    <div className={styles.readButton}>
                        <button>Read more ➜ </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page