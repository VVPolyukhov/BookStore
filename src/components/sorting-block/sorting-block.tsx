import React from 'react'
import { Grid } from 'semantic-ui-react'

import SearchPanelContainer from '../search-panel'
import FilterPanelContainer from '../filter-panel'

const SortingBlock: React.FC = () => {

    return (
        <Grid.Column width={3}>
            <SearchPanelContainer />
            <FilterPanelContainer />
        </Grid.Column>
    )
}

export default SortingBlock
