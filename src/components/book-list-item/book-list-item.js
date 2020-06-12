import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

import './book-list-item.css'

const BookListItem = ( { book, onAddedToCart } ) => {
    
    const { title, author, price, coverImage } = book

    return (
        <Card>
            <Image src={coverImage} alt='cover' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{author}</Card.Meta>
                {/*<Card.Description>
                    Description
                </Card.Description>*/}
            </Card.Content>
            <Card.Content extra>
                {price}
                <Icon name='rub' />
            </Card.Content>
        </Card>
    )
}

export default BookListItem