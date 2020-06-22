import React from 'react';
import { Menu, Input } from 'semantic-ui-react'

import './search-panel.scss';

const SearchPanel = ({ term, onSearch }) => {
    return (
        <Menu.Item>
            <Input icon='search'
                   fluid
                   placeholder='Найти книгу...'
                   value={term}
                   onChange={event => onSearch(event.target.value)}
                    />
        </Menu.Item>
    );
};

export default SearchPanel