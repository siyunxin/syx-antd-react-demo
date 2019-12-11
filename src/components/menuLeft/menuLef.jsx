import React, { Component } from 'react'
import './menuLeft.css'
import {Layout,Menu} from 'element-react'
import {  BrowserRouter as Router,Route,Link} from 'react-router-dom'
import 'element-theme-default'
class MenuLeft extends Component {
    render() {
        return (
            <Layout.Col span={22}>
                <Menu defaultActive="2" className="el-menu-vertical-demo">
                    <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
                        <Menu.ItemGroup title="分组一">
                            <Link to="/">
                                <Menu.Item index="1-1">选项1</Menu.Item>
                            </Link>
                            <Link to="/two">
                                <Menu.Item index="1-2">选项2</Menu.Item>
                            </Link>
                           
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="分组2">
                        <Link to="/three">
                            <Menu.Item index="1-3">选项3</Menu.Item>
                        </Link>
                        </Menu.ItemGroup>
                    </Menu.SubMenu>
                    <Menu.Item index="2"><i className="el-icon-menu"></i>导航二</Menu.Item>
                    <Menu.Item index="3"><i className="el-icon-setting"></i>导航三</Menu.Item>
                </Menu>
            </Layout.Col>
        )
    }


}
export default MenuLeft