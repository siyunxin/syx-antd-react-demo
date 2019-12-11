import React, { Component } from 'react'
import classnames from 'classnames'
class NavMenu extends Component {
    constructor (props){
        super(props)
        this.state = {
            menuList:[
                {
                    name:'登录/注册',
                    menuId:'login'
                },
                {
                    name:'花里胡哨',
                    menuId:'hlhs'
                },
                {
                    name:'技术支持',
                    menuId:'jszc'
                },
                {
                    name:'关于我们',
                    menuId:'aboutus'
                }
            ],
            navShow: true,
            activeId: 'login'
        };
        this.handleCollpase = this.handleCollpase.bind(this);
        this.handleMenuItem = this.handleMenuItem.bind(this);
    }
    render() {
        const { menuList,activeId } = this.state;
        return (
            <div>
                <ul className={classnames('nav-menu', { 'show': this.state.navShow }, { 'hidden': !this.state.navShow })}>
                    {
                        menuList.map((item) => {
                            return (
                                <li className={classnames('top-right-content',{'acivemenu': activeId === item.menuId })} key={item.menuId} onClick={() =>{this.handleMenuItem(item)}}>
                                    <span className="menu-name"> {item.name} </span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="navbar-collapse" onClick={this.handleCollpase}>
                    切换
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
    handleMenuItem( menu ){
        this.setState(() => {
            return {
                activeId: menu.menuId
            }
        })
    }

}

export default NavMenu;