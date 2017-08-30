import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Image,  Col, Well, Button, Div} from 'react-bootstrap';
import Link from 'next/link'

export default ({ title }) => {
        return(
        <div>
            <h1>{title} Titulek itemky</h1> 
        </div>
        )
}

