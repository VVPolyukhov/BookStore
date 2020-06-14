import React from 'react'
import { Grid } from 'semantic-ui-react'

import { BookListContainer, 
         SortingBlockContainer } from '../../containers'

const HomePage = () => {
    return(
        <Grid>
            <SortingBlockContainer />
            <BookListContainer />
        </Grid> 
    )
}

export default HomePage