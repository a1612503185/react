import React, {Component} from 'react';

class Index extends Component {
    render() {
        console.log(this.props.collect)
        return(
            <div className="main">
                收藏
                { this.props.collect.map(item=>(
                    <li key={item._id}>
                        {item.content}
                    </li>
                )) }
            </div>
        )
    }
}

export default Index;