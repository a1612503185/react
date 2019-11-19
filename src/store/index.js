import { createStore ,combineReducers} from "redux"

import collect from './collect.js'

import user from './user.js'

const store = createStore(combineReducers({
    abc:collect,
    xyz:user
}));

//订阅事件:reducers执行完了之后，该注册进来的事件就会自动被触发
//注册事件
store.subscribe(()=>{
    //获取当前的state
    var state = store.getState()
    console.log('abc',state.abc.collect)
    //每次刷新页面时，store中的state都会清空，所以就持久化数据时，可以在订阅事件中添加localstorage
    localStorage.setItem('collect',JSON.stringify(state.abc.collect))
})


export default store;