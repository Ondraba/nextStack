import React from 'react'
import { bindActionCreators } from 'redux'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import PageList from '../components/pageList'
import withRedux from 'next-redux-wrapper'

import { initStore} from '../store'

import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import Link from 'next/link'
import reducers from  '../lib/reducers/index';


const middleware = applyMiddleware(thunk, createLogger());


//import specific styles from the style.js file

class MainPage extends React.Component {
    static getInitialProps ({ store, isServer }) {
      return { isServer }
    }
  

  render() {

    return (
      <div>
        <Head>
          <title>Next -- {`will insert page title here`}</title>
        </Head>
        <Header>Page Title</Header>
        <div>
          <PageList title="index pagelist"></PageList>
          <h2>A Header</h2>
          <p>Some text for my page</p>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(MainPage)