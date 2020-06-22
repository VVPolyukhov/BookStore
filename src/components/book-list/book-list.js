import React from 'react'
import { Grid, Card } from 'semantic-ui-react'

import { BookListItemContainer } from '../../containers'

const BookList = ({ books }) => {
    return (
        <Grid.Column stretched width={13}>
            <Card.Group itemsPerRow={4}>
                {
                    books.map((book, index) => {
                        return (
                            <BookListItemContainer key={index}
                                                   book={book} />
                        )
                    })
                }
            </Card.Group>
        </Grid.Column>
    )
}

export default BookList