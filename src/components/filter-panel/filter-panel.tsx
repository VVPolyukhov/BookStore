import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

import './filter-panel.scss';

export interface PropsType {
    filterBy: string,
    setFilter: (filterBy: string) => void
}

const FilterPanel: React.FC<PropsType> = React.memo(({ filterBy, setFilter }) => {

    const isDisabled = filterBy === 'all' || filterBy === null

    return (
        <>
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
            <Button disabled={isDisabled}
                    onClick={() => setFilter('all')}
                    size='small'>
                Отменить сортировку
            </Button>
        </>
    );
});

export default FilterPanel