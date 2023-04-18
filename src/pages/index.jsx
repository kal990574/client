import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <a href={'/login'}>login</a>
          <a href={'/signup'}>signup</a>
          <a href={'/calendar'}>calendar</a>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
