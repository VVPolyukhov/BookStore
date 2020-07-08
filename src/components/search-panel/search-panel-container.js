import { connect } from 'react-redux';

import SearchPanel from './search-panel'

import { booksSearch } from '../../actions/filter';

const mapStateToProps = ({ filter: { term } }) => {
    return { term }
}

const mapDispatchToProps = {
    onSearch: booksSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel)