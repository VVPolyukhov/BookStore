import { connect } from 'react-redux'

import BookListItem from './book-list-item'

import { bookAddedToCart, BookAddedToCartActionType } from '../../redux/actions/shopping-cart'
import { ReducerType, BookType, CartItemType } from '../../types'

interface MapStateToPropsType {
    particularBook: any
}

interface MapDispatchToPropsType {
    onAddedToCart: (bookId: number) => BookAddedToCartActionType
}

interface OwnPropsType {
    book: BookType,
    key: number  
}

const mapStateToProps = ({ shoppingCart: { cartItems } } : ReducerType, props : OwnPropsType)
                        : MapStateToPropsType => {
    return { particularBook: (cartItems.filter((item: CartItemType) => item.id === props.book.id)).shift() }
}

const mapDispatchToProps : MapDispatchToPropsType = {
    onAddedToCart: bookAddedToCart
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, ReducerType>
                (mapStateToProps, mapDispatchToProps)(BookListItem)