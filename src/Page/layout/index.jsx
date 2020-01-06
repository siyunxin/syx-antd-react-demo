import React, { Component } from 'react'
import NavTop from '../../components/navtop/navTop'

import 'element-theme-default'
import './index.css'


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="wrapper">
                <NavTop></NavTop>
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default Main