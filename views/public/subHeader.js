import React, { Component } from 'react'

export default class SubHeader extends Component {
    render() {
        return (
            <h2 className="sub-header">{this.props.name}</h2>
        )
    }
}