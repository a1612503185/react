import React,{Component} from "react";

import querystring from 'querystring';

class Index extends Component{

    constructor(){
        super();
        this.state = {
            data:{
                file:''
            },
            user:{
                userimg:''
            },
        }
    }

    render() {

        return(

            <div className="main">
                id:{this.state.data._id}  <br/>
                用户:{this.state.user.username} <br/>
                头像: {this.state.user.userimg && <img src={this.$baseurl+'/'+this.state.user.userimg} alt="" style={{width:50,height:50}}/>}<br/>
                图片: {this.state.data.file && <img src={this.$baseurl+'/'+this.state.data.file} alt="" style={{width:200,height:200}}/>} <br/>
                电话:{this.state.user.usertel}
                 <br/>

            </div>
        )
    }

   async componentDidMount() {
        var query = querystring.parse(this.props.location.search.substring(1))
       // console.log(query)
        var {data} = await this.$axios.get(this.$baseurl+'/topics?topicid='+query.id+'&page=1&num=1')
       console.log(data.data[0].user)
       this.setState({
           data:data.data[0],
           user:data.data[0].user,
       })

    }

}

export default Index