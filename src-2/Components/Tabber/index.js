import React,{Component} from "react"

import { NavLink } from 'react-router-dom'

class Index extends Component{

    render() {
        return(
            <div className='tabber'>

                    <li>
                        <NavLink to="/" exact>
                            <span className="fa fa-home"><span>首页</span></span>

                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/collect">
                        <span className="fa fa-paper-plane"><span>收藏</span></span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/push">
                        <span className="fa fa-universal-access"><span>发表</span></span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/user">
                        <span className="fa fa-user"><span>用户</span></span>
                        </NavLink>
                    </li>

            </div>
        )
    }
}

export default Index