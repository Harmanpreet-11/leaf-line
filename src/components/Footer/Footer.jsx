import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.footer}>
            <h1>The best reading books</h1>
            <p>Discover a world where imagination comes alive and knowledge knows no bounds.</p>
        </div>
    </div>
  )
}

export default Footer