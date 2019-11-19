import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Collect extends Component {

    constructor(){
        super();
        this.state = {
            collect:[]
        }
    }

    render() {
        return (
            <div>
                { this.state.collect.map((item)=>(
                    <li key={item._id} className="list-li">
                        <Link to={"/detail?id="+item._id}>
                            <div className="list-item" >
                                {item.content}
                                <img src={this.$baseurl+'/'+item.file} alt="" style={{width:"200px",height:"200px",marginLeft:"20px"}}/>
                            </div>
                        </Link>
                    </li>
                )) }
            </div>
        );
    }

    async componentDidMount() {
        var token = localStorage.getItem('token');
        var {data} = await this.$axios.get(this.$baseurl+`/collects?page=1&num=10&token=${token}`)
        console.log(data.data)
        this.setState({
            collect:[...data.data]
        })
    }
}

export default Collect;