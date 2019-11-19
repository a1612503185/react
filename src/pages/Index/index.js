
import index_Ui from './index_Ui'

import {connect} from 'react-redux'


        // 这是容器组件，也被称为聪明的组件
        const mapStateToProps = state=>({

        })

        const mapDispatchToProps = dispatch=>({
            //在容器组件中的mapDispatchToProps中定义方法，这个方法会映射到ui组件的props上
                addCollect(item){
                    //console.log(item)

                        //dispatch调用时可以往里面传递数据，通常这个数据是一个对象，这个对象里有type属性，描述做什么操作
                       var action = {
                               type:"ADD_COLLECT",
                               payload:item
                       }

                    dispatch(action) //dispatch的执行，就相当于store中的reducers的执行


                }
        })





export default connect( mapStateToProps, mapDispatchToProps )( index_Ui )