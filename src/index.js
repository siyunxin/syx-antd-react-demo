import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Page/layout/index'
import configureStore from './redux/Store/store'
import {Provider} from 'react-redux'

import './index.css';
import './assets/react-blog-icon/iconfont.css'
import { GlobalCss } from './reset'
const store = configureStore()
ReactDOM.render( 
        <Provider store={store}>
             <GlobalCss />
             <Main/>    
        </Provider>,
        document.getElementById('root'));
