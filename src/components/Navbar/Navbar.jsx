import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>Leaf & Line</div>
            <div className={styles.links}>
                <Link href="/discover" >Discover</Link>
                <Link href="/discover" >Bookstore</Link>
                <Link href="/discover" >Self Study</Link>
                <Link href="/discover" >Contacts</Link>
                 <Link href="/discover" >Blog</Link>
                 <div className={styles.button}>
                 <button>SignUp</button>
                 </div>
            </div>
        </div>
    )
}

export default Navbar