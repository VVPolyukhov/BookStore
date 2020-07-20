import { connect } from 'react-redux'

import FilterPanel from './filter-panel'

import { setFilter, SetFilterActionType } from '../../redux/actions/filter'
import { ReducerType } from '../../types'
import { getFilterBy } from '../../redux/selectors/filter'

interface MapStateToPropsType {
    filterBy: string
}

interface MapDispatchToPropsType {
    setFilter: (filterBy: string) => SetFilterActionType
}

const mapStateToProps = (state: ReducerType): MapStateToPropsType => {
    return { 
        filterBy: getFilterBy(state) 
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    setFilter
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReducerType>
                (mapStateToProps, mapDispatchToProps)(FilterPanel)