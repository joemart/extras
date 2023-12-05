import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Jua from '@/styles/fonts/Jua'
import styles from "@/styles/Layout/index.module.scss"
import Navbar from './components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${Jua.className} ${styles["main"]}`}><Navbar /><Component {...pageProps} /></main>
}
