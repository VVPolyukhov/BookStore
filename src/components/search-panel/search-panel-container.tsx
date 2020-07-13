import { connect } from 'react-redux';

import SearchPanel from './search-panel'
import { booksSearch, BooksSearchActionType } from '../../actions/filter';
import { ReducerType } from '../../types'

interface MapStateToPropsType {
    term: string
}

interface MapDispatchToPropsType {
    onSearch: (term: string) => BooksSearchActionType
}

const mapStateToProps = ({ filter: { term } } : ReducerType): MapStateToPropsType => {
    return { term }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    onSearch: booksSearch
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReducerType>
                (mapStateToProps, mapDispatchToProps)(SearchPanel)