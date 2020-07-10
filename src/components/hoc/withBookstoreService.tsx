import React from 'react'
import { BookstoreServiceConsumer } from '../bookstore-service-context'



const withBookstoreService = () => (Wrapped: React.ComponentType) => {
    return (props: any) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
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