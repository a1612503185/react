import {connect} from 'react-redux'

import Collect from './Collect'


const mapStateToProps = state => {

    return {
        //从store仓库中拿collect数据
        collect : state.abc.collect
    }

}
const mapDispatchToProps = dispatch => {

    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Collect);