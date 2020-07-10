import { connect } from 'react-redux'

import ShopHeader from './shop-header'
import { ReducerType } from '../../types' 

type MapStateToPropsType = {
    numItems: number
    orderTotal: number
}

const mapStateToProps = ( { shoppingCart: { numItems, orderTotal }}: ReducerType )
                        : MapStateToPropsType => {
    return {
        numItems,
        orderTotal
    }
}

export default connect<MapStateToPropsType, {}, {}, ReducerType>
                (mapStateToProps)(ShopHeader)