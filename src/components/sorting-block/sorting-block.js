import React from 'react'
import { Grid, Menu, Button } from 'semantic-ui-react'

import { SearchPanelContainer } from '../../containers'

const SortingBlock = ({ setFilter, filterBy }) => {

    return (
        <Grid.Column width={3}>
            <SearchPanelContainer />
            <Menu fluid tabular text vertical>
                <Menu.Item header>Сортировать:</Menu.Item>
                <Menu.Item
                    active={filterBy === 'popularity'}
                    onClick={() => setFilter('popularity')}
                >По популярности</Menu.Item>
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

export default SortingBlock