import { connect } from 'react-redux'

import BookListItem from './book-list-item'

import { bookAddedToCart, BookAddedToCartActionType } from '../../redux/actions/shopping-cart'
import { ReducerType, BookType } from '../../types'
import { getParticularBookById } from '../../redux/selectors/book-list'

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

const mapStateToProps = (state: ReducerType, props : OwnPropsType): MapStateToPropsType => {
    return { 
        particularBook: getParticularBookById(state, props)
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    onAddedToCart: bookAddedToCart
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, ReducerType>
                (mapStateToProps, mapDispatchToProps)(BookListItem)