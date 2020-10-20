
import styles from '../styles/Home.module.css'
import Head from "next/head"
import Link from "next/link"
import Layout from "../components/layout"
export default function Home() {
  return (
    <Layout>
        <Head>
            <title>News-webapp</title>
        </Head>
     <h1>Hello Coder</h1>
     <Link href="/about">
            <a>about</a>
      </Link>
      </Layout>
  )
}
