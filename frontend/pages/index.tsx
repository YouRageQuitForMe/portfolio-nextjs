import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from './components/sidebar/sidebar'

const Home: NextPage = ({data}) => {
  console.log("sexy kjjiprops"+  data);
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:5000/api/rage/projects/NeyonArt')
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

export default Home
