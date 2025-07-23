import Image from 'next/image'
import Link from 'next/link'
import styles from './notFoundpage.module.css'

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.textNotFoundContainer}>
                <h1>Not Found</h1>
                <p>Could not find requested resource</p>
                <Link href="/"><button>Return Home</button></Link>
            </div>
            <div className={styles.imageNotFoundContainer}>
                <Image className={styles.image} src="/notFound.jpg" alt='' width={400} height={400} />
            </div>

        </div>
    )
}