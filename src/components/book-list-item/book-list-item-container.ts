import { connect } from 'react-redux'

import BookListItem from './book-list-item'

import { bookAddedToCart, BookAddedToCartActionType } from '../../actions/shopping-cart'
import { ReducerType, BookType } from '../../types'

type MapStateToPropsType = {
    particularBook: any
}

type MapDispatchToPropsType = {
    onAddedToCart: (bookId: number) => BookAddedToCartActionType
}

type OwnPropsType = {
    book: BookType
    key: number  
}

const mapStateToProps = ({ shoppingCart: { cartItems } } : ReducerType, props : OwnPropsType)
                        : MapStateToPropsType => {
    return { particularBook: (cartItems.filter(item => item.id === props.book.id)).shift() }
}

const mapDispatchToProps : MapDispatchToPropsType = {
    onAddedToCart: bookAddedToCart
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, ReducerType>
                (mapStateToProps, mapDispatchToProps)(BookListItem)