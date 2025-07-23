import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>

      <div className={styles.imageContainer}>
        <Image className={styles.contactImage} src="/contact.jpg" alt='' width={400} height={400} />
      </div>

      <form action="" className={styles.form}>
        <input type="text" placeholder='Name and Surname' required />
        <input type="text" placeholder='Email Address' required />
        <input type="text" placeholder='Phone Number (Optional)' />
        <textarea name="" id="" cols={30} rows={10} placeholder='Message'></textarea>
        <div className={styles.sendButton}>
          <button>Send</button>
        </div>

      </form>

    </div>
  )
}

export default page