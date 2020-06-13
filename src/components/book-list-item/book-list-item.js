import React from 'react'
import { connect } from 'react-redux'
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react'

import { bookAddedToCart } from '../../actions/shopping-cart'

import './book-list-item.css'

const BookListItem = ( { book, onAddedToCart, particularBook } ) => {
    
    const { id, title, author, price, coverImage, rating } = book

    return (
        <Card>
            <div className="cover-image">
                <Image src={coverImage}
                       alt='cover'
                       ui={true} />
            </div>
            <Card.Content>
                <Card.Header className='text-center'>{title}</Card.Header>
                <Card.Meta className='mt7 text-center'>{author}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                Рейтинг:&nbsp;&nbsp;&nbsp;
                <Rating icon="star" rating={rating} maxRating={5} />
                &nbsp;{rating} / 5
            </Card.Content>
            <Card.Content extra>
                <div className='text-center price-color'>
                    <Icon name="rub" />
                    <b>{price}</b>
                </div>
            </Card.Content>
            <Button onClick={() => onAddedToCart(id)}
                    color='green'>
                Добавить в корзину {particularBook ? 
                                    `(${particularBook.count})`:
                                    null}
            </Button>
        </Card>
    )
}

const mapStateToProps = ({ shoppingCart: { cartItems } }, props) => {
    return { particularBook: (cartItems.filter(item => item.id === props.book.id)).shift() }
}

const mapDispatchToProps = {
    onAddedToCart: bookAddedToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListItem)