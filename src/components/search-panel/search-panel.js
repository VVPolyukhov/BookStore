import React from 'react';
import { Menu, Input } from 'semantic-ui-react'
import PropTypes from 'prop-types'

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

SearchPanel.propTypes = {
    term: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
}

export default SearchPanel