import React from 'react'
import { connect } from 'react-redux'
import { Grid, Menu, Button } from 'semantic-ui-react'

import SearchPanel from '../search-panel'

import { setFilter } from '../../actions/filter'

const SortingBlock = ({ setFilter, filterBy }) => {

    return (
        <Grid.Column width={3}>
            <SearchPanel />
            <Menu fluid tabular text vertical>
                <Menu.Item header>Сортировать:</Menu.Item>
                <Menu.Item
                    active={filterBy === 'low-price'}
                    onClick={() => setFilter('low-price')}
                >По цене (сначала дешевые)</Menu.Item>
                <Menu.Item
                    active={filterBy === 'high-price'}
                    onClick={() => setFilter('high-price')}
                >По цене (сначала дорогие)</Menu.Item>
                <Menu.Item
                    active={filterBy === 'bookName'}
                    onClick={() => setFilter('bookName')}
                >По названию книги</Menu.Item>
                <Menu.Item
                    active={filterBy === 'author'}
                    onClick={() => setFilter('author')}
                >По автору</Menu.Item>
            </Menu>
            {
                filterBy === 'all' ? 
                <Button disabled
                        size='small'>
                    Отменить сортировку</Button> :
                <Button onClick={() => setFilter('all')}
                        size='small'>
                    Отменить сортировку</Button>
            }
        </Grid.Column>
    )
}

const mapStateToProps = ({ filter: { filterBy } }) => {
    return { filterBy }
}

const mapDispatchToProps = {
    setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingBlock)