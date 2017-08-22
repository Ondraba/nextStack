import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import { somestyles, aboutContainer } from '../styles/styles'
export default class extends React.Component {
    //static async getInitialProps() {
        //code will go here to get data
 //   }
  constructor (props) {
     super(props)
  }
  render() {
    return (
      <div className={ somestyles }>
        <Head>
          <title>Next -- About Us</title>
        </Head>
        <Header>About</Header>
        <div className={ aboutContainer }>
          <h2>About Us</h2>
          <p>Paragraph about us will go here maybe</p>
        </div>
        <Footer />
      </div>
    )
  }
}