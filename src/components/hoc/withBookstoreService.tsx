import React from 'react'
import { BookstoreServiceConsumer } from '../bookstore-service-context'
import BookstoreService from '../../services/bookstore-service'

const withBookstoreService = () => (Wrapped: React.ComponentType) => {
    return (props: any) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService: BookstoreService) => {
                        return <Wrapped {...props} 
                                        bookstoreService={bookstoreService} 
                                        />
                    }
                }
            </BookstoreServiceConsumer>
        )
    }
}

export default withBookstoreService