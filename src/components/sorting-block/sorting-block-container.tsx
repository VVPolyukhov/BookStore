import { connect } from 'react-redux'

import SortingBlock from './sorting-block'

import { setFilter } from '../../actions/filter'
import { ReducerType, ActionType } from '../../types'

type MapStateToPropsType = {
    filterBy: string
}

type MapDispatchToPropsType = {
    setFilter: (filterBy: string) => ActionType
}

const mapStateToProps = ({ filter: { filterBy } }: ReducerType): MapStateToPropsType => {
    return { filterBy }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    setFilter
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReducerType>
                (mapStateToProps, mapDispatchToProps)(SortingBlock)