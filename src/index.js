import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/'
import {Provider} from 'react-redux'

import './index.css';
import './assets/react-blog-icon/iconfont.css'
import { GlobalCss } from './reset'
import RouterPage from './router'
ReactDOM.render( 
        <Provider store={store}>
             <GlobalCss />
             <RouterPage/>   
        </Provider>,
        document.getElementById('root'));
