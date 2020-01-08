import React from 'react'
import { CSSTransition } from 'react-transition-group'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showMenuNav, changeMenuUrl } from './actionCreater'
const NavMenu = (props) =>{
    const { menuList, navShow, handleCollpase, handleMenuItem, activeId } = props
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

const mapStateToProps = (state) =>{
    return {
        menuList: state.navMenu.menuList,
        navShow: state.navMenu.navShow,
        activeId: state.navMenu.activeId
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleCollpase(){
            const action = showMenuNav()
            dispatch(action)
        },
        handleMenuItem(menu) {
            let screenWidth = document.body.clientWidth;
            if(screenWidth > 756) return;
            const changeUrl = changeMenuUrl(menu.menuId)
            dispatch(changeUrl)
        }        
    }
}
export default connect ( mapStateToProps, mapDispatchToProps ) (NavMenu)
