import React, { Component } from 'react'
import NavMenu from '../navMenu/index'
import 'element-theme-default'
import './navTop.css'

class NavTop extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="bg-purple-dark">
                <div className="">
                    <div className="main-header-left">
                        <div className="header-img">
                            <img src={require('../../assets/headerImg.jpg')} alt="" />
                        </div>
                        <div className="header-name">
                            <span>昕昕来喽的Admin</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="main-header-right">
                        <NavMenu />
                    </div>
                </div>
            </header>
        )
    };
}
export default NavTop;