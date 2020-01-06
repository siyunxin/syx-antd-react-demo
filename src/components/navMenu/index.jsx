import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
class NavMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeId: 'login'
        };
    }
    render() {
        const { menuList, navShow, handleCollpase, handleMenuItem, activeId } = this.props
        return (
            <div>
                <CSSTransition
                    in={ !navShow }
                    timeout={500}
                    classNames="slide"
                >
                    <ul className="nav-menu">
                        {
                            menuList.map((item) => {
                                return (
                                    <li className={classnames('top-right-content', { 'acivemenu': activeId === item.menuId })} key={item.menuId} onClick={() => handleMenuItem(item)}>
                                        <Link to={ item.href }>
                                            <span className="menu-name"> {item.name} </span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </CSSTransition>
                <div className="navbar-collapse" onClick={handleCollpase}>
                    <i className="iconfont icon-daohang"></i>
                </div>
            </div>
        )
    }
    

}
const mapStateToProps = (state) =>{
    console.log( state )
    return {
        menuList: state.menuList,
        navShow: state.navShow,
        activeId: state.activeId
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleCollpase(){
            const action = {
                type: 'show_nav'
            }
            dispatch(action)
        },
        handleMenuItem(menu) {
            let screenWidth = document.body.clientWidth;
            if(screenWidth > 756) return;
            const changeUrl = {
                type:'change_menu_url',
                value: menu.menuId
            }
            dispatch(changeUrl)
        }        
    }
}
export default connect ( mapStateToProps, mapDispatchToProps ) (NavMenu)
