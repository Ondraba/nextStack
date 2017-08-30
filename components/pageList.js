
"use strict";
import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPages} from '../lib/actions/pagesActions';
import {Carousel, Grid, Col, Row, Button} from 'react-bootstrap';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link'

import PageItem from './pageItem';


export default connect(state => state.pages.pages)(({title}) => {
 return (
    <div>
      <h1>{title}</h1>
      <PageItem title={title} />
    </div>
  )
})

