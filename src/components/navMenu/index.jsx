import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import classnames from 'classnames'
import { BrowserRouter as Router, Link } from 'react-router-dom'
class NavMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuList: [
                {
                    name: '登录/注册',
                    menuId: 'login',
                    href:'/login'
                },
                {
                    name: '花里胡哨',
                    menuId: 'hlhs',
                    href:'hlhs',
                },
                {
                    name: '技术支持',
                    menuId: 'jszc',
                    href:'/jszc'
                },
                {
                    name: '关于我们',
                    menuId: 'aboutus',
                    href:'/aboutus'
                }
            ],
            navShow: false,
            activeId: 'login'
        };
        this.handleCollpase = this.handleCollpase.bind(this);
        this.handleMenuItem = this.handleMenuItem.bind(this);
    }
    render() {
        const { menuList, activeId, navShow } = this.state;
        return (
            <div>
                <CSSTransition
                    in={ !navShow }
                    timeout={500}
                    classNames="slide"
                >
                    <Router>
                    <ul className="nav-menu">
                        {/* <ul className={classnames("nav-menu", { 'show': navShow }, { 'hidden': !navShow })}> */}
                        {
                            menuList.map((item) => {
                                return (
                                    <li className={classnames('top-right-content', { 'acivemenu': activeId === item.menuId })} key={item.menuId} onClick={() => { this.handleMenuItem(item) }}>
                                        <Link to={ item.href }>
                                            <span className="menu-name"> {item.name} </span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    </Router>
                    
                </CSSTransition>
                <div className="navbar-collapse" onClick={this.handleCollpase}>
                    <i className="iconfont icon-daohang"></i>
                </div>
            </div>
        )
    }
    handleCollpase() {
        this.setState((preState) => {
            return {
                navShow: !preState.navShow
            }
        })
    };
    handleMenuItem(menu) {
        this.setState(() => {
            return {
                activeId: menu.menuId
            }
        })
    }

}

export default NavMenu;