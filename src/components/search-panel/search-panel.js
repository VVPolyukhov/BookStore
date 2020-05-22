import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { booksSearch } from '../../actions';

import './search-panel.css';

const SearchPanel = ({ term, onSearch }) => {
    return (
        <Fragment>
            <h4 className='text-center'>Какую книгу вы хотели бы найти?</h4>
            <input type="text"
                className="form-control search-input"
                placeholder="Введите название..."
                value={term}
                onChange={event => onSearch(event.target.value)} />
        </Fragment>
    );
};

const mapStateToProps = ({ bookList: { term } }) => {
    return { term }
}

const mapDispatchToProps = {
    onSearch: booksSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel)