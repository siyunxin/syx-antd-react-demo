import React, { Component } from 'react'
import NavTop from '../../components/navtop/navTop'
import {  BrowserRouter as Router,Route,Link} from 'react-router-dom'
import AboutUs from '../aboutUs'
import Technology from '../technology'
import Hlhs from '../hlhs'
import Login from '../person'
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