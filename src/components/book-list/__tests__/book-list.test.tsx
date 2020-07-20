import React from 'react'
import BookList, { PropsType } from '../book-list'
import { shallow } from 'enzyme'

describe('BookList:', () => {
    const props: PropsType = {
        books: [
            {
                id: 1,
                author: 'author1',
                image: 'url1',
                price: 100,
                rating: 1,
                title: 'title1'
            },
            {
                id: 2,
                author: 'author2',
                image: 'url2',
                price: 200,
                rating: 2,
                title: 'title2'
            }
        ]
    }
    const Wrapper = shallow(<BookList {...props} />)
    
    it('renders properly', () => {
        expect(Wrapper).toMatchSnapshot()
    })
    it('renders books', () => {
        expect(Wrapper.find('Connect(BookListItem)')).toHaveLength(props.books.length)
    })
})