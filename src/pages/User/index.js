import React,{Component} from "react";
import Register from '../Register/index'
import Login from '../Login/index'
import { NavLink, Route ,Redirect} from 'react-router-dom'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button } from 'antd';

class Index extends Component{
    render() {
        return(
            <div className="main">
                <div className="main-child">

                <NavLink to="/user/register">
                    <Button type="primary">注册</Button>
                </NavLink>
                <NavLink to="/user/login">
                    <Button type="danger">登录</Button>
                </NavLink>
                </div>

                <Route path='/User/register' component={Register}/>
                <Route path='/User/login' component={Login}/>
                <Redirect excat to='/User/login' />

            </div>
        )
    }
}

export default Index