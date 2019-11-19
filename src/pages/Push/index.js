import React,{Component} from "react";
import { Input } from 'antd';
const { TextArea } = Input;
class Index extends Component{

    async form_submit(e){
        e.preventDefault();
        var fd = new FormData(e.target); //得到表单数据
        fd.append('token',localStorage.getItem('token'))
        var {data} =await this.$axios.post(this.$baseurl+'/topic',fd) //发送axios发送出去数据
        console.log(data)
    }

    render() {

        return(
            <div className="main">

                <h2 style={{textAlign:'center'}}>发帖</h2>
                <form onSubmit={(e)=>{this.form_submit(e)}}>
                    上传文件:<input type="file" ref="file" name="file1"/> <br/>
                    内容:<TextArea name="content" style={{width:'80%',marginTop:'20px'}}></TextArea>  <br/>
                    <input type="submit" value="发帖" style={{backgroundColor:'red',border:'none',height:'40px',color:'white'}}/>
                </form>
            </div>
        )
    }
}

export default Index