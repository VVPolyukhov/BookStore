import { connect } from 'react-redux'

import SortingBlock from '../components/sorting-block'

import { setFilter } from '../actions/filter'

const mapStateToProps = ({ filter: { filterBy } }) => {
    return { filterBy }
}

const mapDispatchToProps = {
    setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingBlock)