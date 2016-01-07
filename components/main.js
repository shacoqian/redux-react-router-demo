import React , { Component } from 'react'
import Header from './header'
import Left from './left'
import { connect } from 'react-redux'
import { pushPath } from 'redux-simple-router'


class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <Left />
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = connect(
    null
)(Main)