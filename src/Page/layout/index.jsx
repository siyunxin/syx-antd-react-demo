import React, { Component } from 'react'
import NavTop from '../../components/navtop/navTop'
import MenuLeft from '../../components/menuLeft/menuLef'
import {  BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Layout } from 'element-react'
import 'element-theme-default'
import './index.css'
import HomeIndex from '../home/homeIndex'
import Two from '../two/two'


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
                {/* <div className="wrapper-content">
                    <Router>
                        <Layout.Row>
                            <Layout.Col span="4">
                                <div className="body_left">
                                    <MenuLeft></MenuLeft>
                                </div>
                            </Layout.Col>
                            <Layout.Col span="20">
                                <div className="body_right">
                                    <Route exact path="/" component={HomeIndex}></Route>
                                    <Route exact path="/two" component={Two}></Route>
                                </div>
                            </Layout.Col>
                        </Layout.Row>
                    </Router>
                </div> */}
            </div>
        )
    }
}

export default Main