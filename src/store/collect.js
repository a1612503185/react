//这是一个reducer文件，描述的是所有的与收藏有关的state

// 初始的状态
const stateDefault = {
    //json.parse 把字符串转换为对象
    collect: JSON.parse(localStorage.getItem('collect') || '[]')
}

// 创建 reducers，把初始的状态带入进入，让两者关联在一起。
const reducers = function( state=stateDefault, action ){
    //state代表当前的状态，action代表传入的数据

    //z reducers 中可以直接操作store中的state
    switch (action.type) {
        case 'ADD_COLLECT':
            state.collect.push(action.payload)
            break;
        default:
    }

    //state是当前的reducers中的state，与别的reducers中的state无关
    //console.log('reducer',state.collect)

    return state //处理后的，最新的state状态
}

export default reducers;