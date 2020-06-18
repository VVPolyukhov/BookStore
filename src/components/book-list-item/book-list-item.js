import React from 'react'
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react'

import './book-list-item.css'

const BookListItem = ( { book, onAddedToCart, particularBook } ) => {
    
    const { id, title, author, price, image, rating } = book

    return (
        <Card>
            <div className="cover-image">
                <Image src={image}
                       alt='cover'
                       ui={true} />
            </div>
            <Card.Content>
                <Card.Header className='text-center'>{title}</Card.Header>
                <Card.Meta className='mt7 text-center'>{author}</Card.Meta>
            </Card.Content>
            <Card.Content extra 
                          className='text-center'>
                Рейтинг:&nbsp;&nbsp;
                <Rating icon="star" rating={rating} maxRating={5} />
                &nbsp;&nbsp;{rating} / 5
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
