import { createStore } from "redux"

// 初始的状态
const stateDefault = {
    arr:[]
}

// 创建 reducers，把初始的状态带入进入，让两者关联在一起。
const reducers = function( state=stateDefault, action ){
    //state代表当前的状态，action代表传入的数据
    // 在此处应根据action.type来决定对state进行增删改查哪种操作
    // 暂时不做任何操作，直接把前一次的state直接返回给store
    //action获取到需要修改的东西，这里面也写业务逻辑

       switch (action.type) {
           default:
       }
    //返回全局数据
    return state
}

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;