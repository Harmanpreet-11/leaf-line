'use client'
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.name}>Leaf & Line</Link>
            <div className={styles.links}>
                <Link 
                    href="/discover" 
                    className={pathname === '/discover' ? styles.active : ''}
                >Discover</Link>

                <Link 
                    href="/bookstore" 
                    className={pathname === '/bookstore' ? styles.active : ''}
                >Bookstore</Link>

                <Link 
                    href="/contact" 
                    className={pathname === '/contact' ? styles.active : ''}
                >Contacts</Link>

                <Link 
                    href="/blog" 
                    className={pathname === '/blog' ? styles.active : ''}
                >Blog</Link>

                <div className={styles.button}>
                    <button>SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
