import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
//import specific styles from the style.js file

export default class extends React.Component {
 
  constructor (props) {
     super(props)
  }
  render() {
    return (
      <div>
        <Head>
          <title>Next -- {`will insert page title here`}</title>
        </Head>
        <Header>Page Title</Header>
        <div>
          <h2>A Header</h2>
          <p>Some text for my page</p>
        </div>
        <Footer />
      </div>
    )
  }
}