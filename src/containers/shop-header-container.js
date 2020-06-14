import { connect } from 'react-redux'

import ShopHeader from '../components/shop-header'

const mapStateToProps = ( { shoppingCart: { numItems, orderTotal }} ) => {
    return {
        numItems,
        orderTotal
    }
}

export default connect(mapStateToProps)(ShopHeader)