import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

type myProps = {
  children: React.ReactNode
}

export const MainLayout: FC<myProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        { children }
      </main>
    </div>
  )
}
