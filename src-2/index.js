import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './assets/js/rem.js'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
import App from './App';
import './assets/js/axios'
import './assets/js/EventBus'
import 'antd'
import store from "./store/index";
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


