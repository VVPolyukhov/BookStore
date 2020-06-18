import React from 'react'
import { Grid, Menu, Button } from 'semantic-ui-react'

import { SearchPanelContainer } from '../../containers'

const SortingBlock = ({ setFilter, filterBy }) => {

    return (
        <Grid.Column width={3}>
            <SearchPanelContainer />
            <Menu fluid tabular text vertical>
                <Menu.Item header>Сортировать по:</Menu.Item>
                <Menu.Item
                    active={filterBy === 'popularity'}
                    onClick={() => setFilter('popularity')}
                >Популярности</Menu.Item>
                <Menu.Item
                    active={filterBy === 'low-price'}
                    onClick={() => setFilter('low-price')}
                >Цене (сначала дешевые)</Menu.Item>
                <Menu.Item
                    active={filterBy === 'high-price'}
                    onClick={() => setFilter('high-price')}
                >Цене (сначала дорогие)</Menu.Item>
                <Menu.Item
                    active={filterBy === 'bookName'}
                    onClick={() => setFilter('bookName')}
                >Названию книги</Menu.Item>
                <Menu.Item
                    active={filterBy === 'author'}
                    onClick={() => setFilter('author')}
                >Автору</Menu.Item>
            </Menu>
            {
                filterBy === 'all' || filterBy === null ? 
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
