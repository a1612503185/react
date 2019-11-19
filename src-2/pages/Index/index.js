import React,{Component} from "react";

import index_Ui from './index_Ui'

import {connect} from 'react-redux'


        // 这是容器组件，也被称为聪明的组件
        const mapStateToProps = function(state, props){
            return {

            }
        }

        const mapDispatchToProps = function(dispatch){
            return {
                // abc(item){
                //     console.log('容器组件',item)
                //     var actions = {
                //         type:'ADD',
                //         payload:item
                //     }
                //     dispatch(actions)
                // }
            }
        }





export default connect( mapStateToProps, mapDispatchToProps )( index_Ui )