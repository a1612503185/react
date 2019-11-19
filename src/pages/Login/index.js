import React,{Component} from "react";

import { Input } from 'antd';



class Index extends Component{

    async form_submit(e){
        e.preventDefault();
        var fd = new FormData(e.target); //得到表单数据
        var {data} =await this.$axios.post(this.$baseurl+'/user_login',fd) //发送axios发送出去数据
        console.log('data1',data)

        let content = data.text
        //接收传递过来的showToast函数
        this.$eventbus.emit('showToast',content)

        if (data.code===1){
            localStorage.setItem('token',data.token)
            this.props.history.push({pathname:'/push'})
        }
    }z

    async loadCaptcha(){
        // console.log(this.$baseurl)
        var {data} =  await this.$axios.get(this.$baseurl+'/svgcaptcha')
        console.log(data)
        var {text,captcha} = data;
        this.refs.div1.innerHTML=data.data
        //console.log(data)
        this.refs.cap_token.value=captcha
        this.refs.cap.value=text;

    }

    componentDidMount() {
        this.loadCaptcha()

    }

    hand(){
        this.loadCaptcha()
    }

    // go(){
    //    this.props.history.push({pathname:'/'})
    // }

    render() {

        return(
            <div className="main">

                <h2 style={{textAlign:'center'}}>登录</h2>
                {/*<button onClick={e=>this.go()}>???????????????</button>*/}
                <form onSubmit={(e)=>{this.form_submit(e)}}>
                    用户名:<Input ref="username" name="username"/> <br/>
                    密&nbsp;&nbsp;&nbsp; 码:<Input ref="password" type="password" name="password"/> <br/>

                    验证码:<input ref="cap" name="cap" style={{height:'30px',borderRadius:'5px'}}/>
                    <div ref='div1' onClick={()=>{this.hand()}} style={{marginTop:'10px'}}></div>

                    <input ref="cap_token" type="hidden" name="cap_token"/>

                    <input type="submit" value="登录" style={{backgroundColor:'red',border:'none',height:'40px',color:'white'}}/>
                </form>
            </div>
        )
    }
}

export default Index