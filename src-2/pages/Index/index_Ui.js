import React,{Component} from "react";

import {Link} from "react-router-dom";

import './index-css.css'

import $ from  'jquery'
class Index extends Component{

    constructor(){
        super();
        this.state = {
            arr:[],
        }

    }

    save(item){
        $('#'+item._id).toggleClass('fa-heart').toggleClass('fa-heart-o');
        var token = localStorage.getItem('token');
        console.log('token',token)
        var id = item._id
        var fd = new FormData();
        fd.append('topicid', id);
        fd.append('token', token);
        if (token){
            this.$axios.post(this.$baseurl+'/collect',fd).then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err);
            })

        }else{
            alert('您还没有登录。请登录')
        }
        }

    render() {
        return(
            <div className="main">
                {this.state.arr.map((item,index)=>(
                    <li key={item._id} className="list-li">
                        <Link to={"/detail?id="+item._id}>
                            <div className="list-item" >
                                {item.content}
                                <img src={this.$baseurl+'/'+item.file} alt="" style={{width:"200px",height:"200px",marginLeft:"20px"}}/>
                            </div>
                        </Link>
                        <div className="haha">
                            <i className=" fa fa-heart-o " id={ item._id} onClick={()=>this.save(item)}> </i>
                        </div>

                    </li>
                ))}
            </div>
        )
    }


    async componentDidMount() {

        var {data} =await this.$axios.get(this.$baseurl+'/topics?page=1&num=10') //发送axios发送出去数据
         console.log('data',data)
        this.setState({
            arr:[...data.data]
        })
    }
}

export default Index