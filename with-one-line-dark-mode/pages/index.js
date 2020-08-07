import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home() {
  const [mode, setMode] =useState('light-mode')
  const toggleTheme = (theme) => {
    document.getElementsByTagName('html')[0].dataset.theme =theme
    setMode(theme)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {mode==='light-mode' && <button onClick={() => toggleTheme('dark-mode')}>dark theme</button>}
        {mode==='dark-mode' && <button onClick={() => toggleTheme('light-mode')}>light theme</button>}
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p><img src="https://cdn-ak-scissors.b.st-hatena.com/image/square/b24eb95389574158c8732aa473affd86ae900c7c/height=280;version=1;width=400/https%3A%2F%2Fblog-imgs-46.fc2.com%2Fv%2Fi%2Fc%2Fvictorique2%2Ftopgununuyuruyur25.jpg" alt=""/></p>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
