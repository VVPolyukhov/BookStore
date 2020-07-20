import { connect } from 'react-redux'

import ShopHeader from './shop-header'
import { ReducerType } from '../../types' 
import { getNumItems, getOrderTotal } from '../../redux/selectors/shopping-cart'

interface MapStateToPropsType {
    numItems: number,
    orderTotal: number
}

const mapStateToProps = (state: ReducerType ): MapStateToPropsType => {
    return {
        numItems: getNumItems(state),
        orderTotal: getOrderTotal(state)
    }
}

export default connect<MapStateToPropsType, {}, {}, ReducerType>
                (mapStateToProps)(ShopHeader)