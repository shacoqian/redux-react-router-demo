import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { changeActive } from '../actions/leftAction'

export class Left extends Component {
    render() {
        const {  number, changeActive} = this.props;

        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                    <li onClick={() => changeActive(0)} className={number == 0 ? 'active' : ''} >
                        <Link to={`/`}>首页</Link>
                    </li>
                    <li onClick={()=>changeActive(1)}  className={number == 1 ? 'active' : ''}>
                        <Link to={`/hello`}>Hello</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect(
    state => ({number: state.active.number}), 
    {changeActive }
)(Left)