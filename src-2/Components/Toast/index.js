import React , { Component }  from 'react';

import './index.scss'

import {CSSTransition, TransitionGroup} from 'react-transition-group';

class App extends Component{

    constructor(){
        super();
        this.state ={
            arr:[]
        }
    }

    showToast(str){
        this.setState({
            showBox:true,
            arr:[...this.state.arr,{text:str,id:new Date().getTime()}]
        })

        setTimeout(()=>{
          this.setState(state=>{
              state.arr.splice(0,1);
              return state;
          })
        },2000)
    }

    //把上面的showToast()函数封装在showToast这个名字里面,传递到注册页的index里面
    componentDidMount() {
   this.$eventbus.on('showToast',this.showToast.bind(this))

    }

    render() {

        return (
         <div className="toast">
            <TransitionGroup>

                {this.state.arr.map((item)=>(
                    <CSSTransition
                        key={item.id}
                        timeout={1500}  //执行完的时间
                        classNames={{
                            enterActive:'fadeIn',
                            exitActive:'fadeOut',
                        }}
                     >
                        <li className="animated">
                            {item.text}
                        </li>
                    </CSSTransition>
                ))}

            </TransitionGroup>
        </div>
        )
    }
}

export default App;
