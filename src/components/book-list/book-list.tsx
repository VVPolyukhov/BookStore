import React from 'react'
import { Grid, Card } from 'semantic-ui-react'

import BookListItemContainer from '../book-list-item'
import { BookType } from '../../types'

type PropsType = {
    books: Array<BookType>
}

const BookList : React.FC<PropsType> = ({ books }) => {
    return (
        <Grid.Column stretched width={13}>
            <Card.Group itemsPerRow={4}>
                {
                    books.map((book : BookType, index : number) => {
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