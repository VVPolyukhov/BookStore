import React from 'react'
import { shallow } from 'enzyme'

import FilterPanel, { PropsType } from '../filter-panel'

describe('FilterPanel:', () => {
    const props: PropsType = {
        filterBy: 'all',
        setFilter: () => {}
    }

    describe('Button is disabled?', () => {
        const Wrapper = shallow(<FilterPanel {...props} />)

        it('renders properly', () => {
            expect(Wrapper).toMatchSnapshot()
        })
        it('button is disabled if (filterBy == ("all" | null)', () => {
            const button = Wrapper.find('Button')
            expect(button.prop('disabled')).toBeTruthy()
        })
    })
    
    describe('Button is available?', () => {
        const nextProps = {
                ...props,
                filterBy: 'author'
            }
        const Wrapper = shallow(<FilterPanel {...nextProps} />)

        it('renders properly', () => {
            expect(Wrapper).toMatchSnapshot()
        })
        it('button is available if (filterBy != "all")', () => {
            const button = Wrapper.find('Button')
            expect(button.prop('disabled')).toBeFalsy()
        })
    })
})