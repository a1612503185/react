import React , { Component,lazy,Suspense}  from 'react';

import Tabber from './Components/Tabber/index'

import { BrowserRouter, Route } from 'react-router-dom'

import Index from './pages/Index/index'
import Collect from './pages/Collect/index'
import User from './pages/User/index'
import Detail from './Components/Detail/index'

import Toast from './Components/Toast/index'

import './assets/styles/animate.min.css'
//懒加载技术
const Push = lazy(()=>import('./pages/Push/index'))

class App extends Component{

  render() {

    return (
        <BrowserRouter>
            <div className='container'>

                <Route path='/' component={Index} exact/>
                <Route path='/Collect' component={Collect}/>
                {/*懒加载技术*/}
            <Suspense fallback={<div style={{position:'Fixed',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>loading...</div>}>
                <Route path='/Push' component={Push}/>
            </Suspense>
                <Route path='/User' component={User}/>
                <Route path='/detail' component={Detail}/>


                <Tabber />
                <Toast />
            </div>
        </BrowserRouter>
    )
  }
}

export default App;


