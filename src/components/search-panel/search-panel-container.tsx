import { connect } from 'react-redux';

import SearchPanel from './search-panel'
import { booksSearch } from '../../actions/filter';
import { ReducerType } from '../../types'

type MapStateToPropsType = {
    term: string
}

type MapDispatchToPropsType = {
    onSearch: (term: string) => void
}

const mapStateToProps = ({ filter: { term } } : ReducerType): MapStateToPropsType => {
    return { term }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    onSearch: booksSearch
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReducerType>
                (mapStateToProps, mapDispatchToProps)(SearchPanel)