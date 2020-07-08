import { connect } from 'react-redux'

import BookListItem from './book-list-item'

import { bookAddedToCart } from '../../actions/shopping-cart'

const mapStateToProps = ({ shoppingCart: { cartItems } }, props) => {
    return { particularBook: (cartItems.filter(item => item.id === props.book.id)).shift() }
}

const mapDispatchToProps = {
    onAddedToCart: bookAddedToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListItem)