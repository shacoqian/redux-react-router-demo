import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import SubHeader from '../public/subHeader'
import { getLists } from  '../../actions/defaultAction'

export class Default extends Component {

    constructor(props) {
        super(props);
        const { getLists, result } = this.props;
    }

    componentDidMount() {
        this.props.getLists();
    }

    render() {
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <SubHeader name="Section title" />
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Header</th>
                                <th>Header</th>
                                <th>Header</th>
                                <th>操作</th>
                            </tr>
                        </thead>

                        { this.props.result.status == 1 ? <TbodyTd data={this.props.result.data} /> : <TbodyNone  /> }
                    </table>
                </div>
            </div>
        )
    }

}

class TbodyTd extends Component {
    render() {
        return (
            <tbody>
                {this.props.data.map(function(item,i){
                  return (
                    <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.name2}</td>
                      <td>{item.name3}</td>
                      <td>111</td>
                    </tr>
                  )
                })}
            </tbody>
        )
    }

}

class TbodyNone extends Component {
    render() {
        return (
            <tbody>
                <tr>
                  <td colSpan="10" className="text-center" >没有内容</td>
                </tr>
            </tbody>
        )
    }
}

export default connect (
    state => ({result: state.get_data.result}),
    { getLists }
)(Default)