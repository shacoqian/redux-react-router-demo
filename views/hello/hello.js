import React, { Component } from 'react'
import SubHeader from '../public/subHeader'


export default class Hello extends Component {
    render() {
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <SubHeader name="hello" />
            </div>
        )
    }
}

