import React from 'react';
import { Menu, Input } from 'semantic-ui-react'

import './search-panel.scss';

interface PropsType {
    term: string,
    onSearch: (bookName : string) => void
}

const SearchPanel : React.FC<PropsType> = ({ term, onSearch }) => {
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