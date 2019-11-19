import React,{Component} from "react";

import {Link} from "react-router-dom";

import './index-css.css'

import {Button} from "antd";

class Index extends Component{

    constructor(){
        super();
        this.state = {
            arr:[],
        }

    }


    render() {
        return(
            <div className="main">
                <div>
                    <Link to='./location'>
                        <Button>
                            地图
                        </Button>
                    </Link>
                </div>
                {this.state.arr.map((item,index)=>(
                    <li key={item._id} className="list-li">
                        <Link to={"/detail?id="+item._id}>
                            <div className="list-item" >
                                {item.content}
                                <img src={this.$baseurl+'/'+item.file} alt="" style={{width:"200px",height:"200px",marginLeft:"20px"}}/>
                            </div>
                        </Link>
                        <div className="haha">
                            <i className=" fa fa-heart-o "onClick={()=>this.props.addCollect(item)}> </i>
                        </div>

                    </li>
                ))}
            </div>
        )
    }


    async componentDidMount() {

        var {data} =await this.$axios.get(this.$baseurl+'/topics?page=1&num=10') //发送axios发送出去数据
         //console.log('data',data)
        this.setState({
            arr:[...data.data]
        })
    }
}

export default Index