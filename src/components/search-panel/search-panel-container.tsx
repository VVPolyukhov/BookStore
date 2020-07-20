import { connect } from 'react-redux';

import SearchPanel from './search-panel'
import { booksSearch, BooksSearchActionType } from '../../redux/actions/filter';
import { ReducerType } from '../../types'
import { getTerm } from '../../redux/selectors/filter';

interface MapStateToPropsType {
    term: string
}

interface MapDispatchToPropsType {
    onSearch: (term: string) => BooksSearchActionType
}

const mapStateToProps = (state : ReducerType): MapStateToPropsType => {
    return { 
        term: getTerm(state) 
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    onSearch: booksSearch
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReducerType>
                (mapStateToProps, mapDispatchToProps)(SearchPanel)