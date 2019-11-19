import React,{Component} from "react";
import {withRouter} from 'react-router-dom'
import store from '../../store/index'
import {Collapse} from "antd";

class Index extends Component{

    constructor(props){
        super(props);
        this.state = this.props.state
    }



    render() {
        return(
            <div className="main">
                {this.state.arr.map((item)=>(
                    <li key={item._id} style={{marginTop:'20px',marginLeft:'20px'}}>
                        收藏内容 ：{item.content} <br/>
                        收藏图片 ：{item.file && <img src={this.$baseurl+'/'+item.file} alt="" style={{width:200,height:200}}/>} <br/>
                    </li>
                ))}
            </div>

        )
    }

    componentDidMount() {
        if (this.state.arr==''){
            alert('您还没有收藏喜欢的东西~')
            this.props.history.push('/')
        }
    }
}

export default withRouter(Index)
