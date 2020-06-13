import React from 'react';
import { connect } from 'react-redux';
import { Menu, Input } from 'semantic-ui-react'

import { booksSearch } from '../../actions/filter';

import './search-panel.css';

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

const mapStateToProps = ({ filter: { term } }) => {
    return { term }
}

const mapDispatchToProps = {
    onSearch: booksSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel)