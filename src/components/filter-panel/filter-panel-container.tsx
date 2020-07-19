import { connect } from 'react-redux'

import FilterPanel from './filter-panel'

import { setFilter, SetFilterActionType } from '../../redux/actions/filter'
import { ReducerType } from '../../types'

interface MapStateToPropsType {
    filterBy: string
}

interface MapDispatchToPropsType {
    setFilter: (filterBy: string) => SetFilterActionType
}

const mapStateToProps = ({ filter: { filterBy } }: ReducerType): MapStateToPropsType => {
    return { filterBy }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    setFilter
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReducerType>
                (mapStateToProps, mapDispatchToProps)(FilterPanel)