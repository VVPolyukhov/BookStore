import React from 'react'
import { BookListContainer, PropsType } from '../book-list-container'
import { shallow } from 'enzyme'

describe('BookListContainer:', () => {
  const props: PropsType = { 
      books: [],
      loading: false,
      error: null,
      fetchBooks: () => {}
  }

  /*
  describe('BookListContainer - initial', () => { 
    const mockFetchBooks = jest.fn()
    const nextProps: PropsType = {
        ...props, 
        fetchBooks: mockFetchBooks
    }

    const Wrapper = shallow(<BookListContainer {...nextProps} />)
    it('renders properly', () => {
      expect(Wrapper).toMatchSnapshot()
    })
    it('dispatches the `fetchBooks()` method it receives from props', () => {
      expect(mockFetchBooks).toHaveBeenCalled()
    })
  })
  */
 
  describe('BookListContainer - loading', () => {
    const nextProps = {
      ...props,
      loading: true,
    }

    const Wrapper = shallow(<BookListContainer {...nextProps} />)
    it('renders properly', () => {
      expect(Wrapper).toMatchSnapshot()
    })
    it('render with loading', () => {
      expect(Wrapper.find('Spinner')).toHaveLength(1) 
      expect(Wrapper.find('ErrorIndicator')).toHaveLength(0)
      expect(Wrapper.find('BookList')).toHaveLength(0)
    })
  })

  describe('BookListContainer - error', () => {
    const nextProps = {
      ...props,
      error: true,
    }
    
    const Wrapper = shallow(<BookListContainer {...nextProps} />)
    it('renders properly', () => {
      expect(Wrapper).toMatchSnapshot()
    })
    it('render with error', () => {
      expect(Wrapper.find('Spinner')).toHaveLength(0) 
      expect(Wrapper.find('ErrorIndicator')).toHaveLength(1)
      expect(Wrapper.find('BookList')).toHaveLength(0)
    })
  })

  describe('BookListContainer renders BookList component', () => {
    const Wrapper = shallow(<BookListContainer {...props} />)
    it('renders properly', () => {
      expect(Wrapper).toMatchSnapshot()
    })
    it('render <BookList /> template', () => {
      expect(Wrapper.find('Spinner')).toHaveLength(0) 
      expect(Wrapper.find('ErrorIndicator')).toHaveLength(0)
      expect(Wrapper.find('BookList')).toHaveLength(1)
    })
  })
})