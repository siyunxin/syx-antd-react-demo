import React, {Component} from 'react'
import {  BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Layout from '../Page/layout'
import AboutUs from '../Page/aboutUs'
import Hlhs from '../Page/hlhs'
import Technology from '../Page/technology'
import Login from '../Page/person'
class RouterPage extends Component {
    render() {
        return (
            <div>
                <Router>
                     <Layout>
                            <Route exact path="/" component= { Login } />
                            <Route exact path="/aboutus" component= { AboutUs } />
                            <Route exact path="/hlhs" component= { Hlhs } />
                            <Route exact path="/jszc" component= { Technology } /> 
                    </Layout>
                </Router>
            </div>
        )
    }
}

export default RouterPage