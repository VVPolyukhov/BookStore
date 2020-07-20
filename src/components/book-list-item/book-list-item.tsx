import React from 'react'
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react'

import './book-list-item.scss'

import { BookType, CartItemType, ActionType } from '../../types'

interface PropType {
    book : BookType, 
    onAddedToCart: (id : number) => ActionType, 
    particularBook: CartItemType
}

const BookListItem : React.FC<PropType> = ( { book, onAddedToCart, particularBook } ) => {
    
    const { id, title, author, price, image, rating } = book
    const maxRating = 5

    return (
        <Card>
            <Image src={image}
                className='cover-image'
                alt='cover'
                ui={true} />
            <Card.Content>
                <Card.Header className='text-center'>{title}</Card.Header>
                <Card.Meta className='mt7 text-center'>{author}</Card.Meta>
            </Card.Content>
            <Card.Content extra 
                          className='text-center'>
                Рейтинг:&nbsp;&nbsp;
                <Rating icon="star" rating={rating} maxRating={maxRating} />
                &nbsp;&nbsp;{rating} / {maxRating}
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

export default BookListItem
