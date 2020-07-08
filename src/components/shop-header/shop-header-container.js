import { connect } from 'react-redux'

import ShopHeader from './shop-header'

const mapStateToProps = ( { shoppingCart: { numItems, orderTotal }} ) => {
    return {
        numItems,
        orderTotal
    }
}

export default connect(mapStateToProps)(ShopHeader)