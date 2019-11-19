import React, {Component} from 'react';

import { Input ,} from 'antd';

import './register.scss'

class Index extends Component{

    async form_submit(e){
         e.preventDefault();
        var fd = new FormData(e.target); //得到表单数据
        console.log(fd)
        var {data} =await this.$axios.post(this.$baseurl+'/user',fd) //发送axios发送出去数据
        console.log(data)
        let content = data.text

        //接收传递过来的showToast函数
        this.$eventbus.emit('showToast',content)
    }

    async loadCaptcha(){
        //console.log(this.$baseurl)
        var {data} =  await this.$axios.get(this.$baseurl+'/svgcaptcha')
        //console.log(data)
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

    render() {

        return(
            <div className="main main1">
                <h2 style={{textAlign:'center'}}>注册</h2>
                <form onSubmit={(e)=>{this.form_submit(e)}}>
                    用户名:<Input ref="username" name="username"/> <br/>
                    密&nbsp;&nbsp;&nbsp; 码:<Input ref="password" type="password" name="password"/> <br/>
                    手机号:<Input ref="tel" name="tel"/> <br/>

                    用户头像:
                    <input type="file" name="file1"/> <br/>

                    验证码:<input ref="cap" name="cap" style={{height:'30px',borderRadius:'5px'}}/>
                    <div ref='div1' onClick={()=>{this.hand()}} style={{marginTop:'10px'}}></div>
                    <input ref="cap_token" type="hidden" name="cap_token"/><br/>

                    <input type="submit" value="注册" style={{backgroundColor:'red',border:'none',height:'40px',color:'white'}}/>
                </form>
            </div>
        )
    }
}

export default Index
