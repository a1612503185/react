import React from "react";

import { connect } from 'react-redux'

import index_Ui from './index_UI'

const mapStateToProps = function(state,props){

    // console.log(props)
    // console.log(state)
        return {
            state
        }

}

const mapDispatchToProps = function(dispath){
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(index_Ui)