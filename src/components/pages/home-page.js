import React from 'react'
import { Grid } from 'semantic-ui-react'

import BookList from '../book-list'
import SortingBlock from '../sorting-block'

const HomePage = () => {
    return(
        <Grid>
            <SortingBlock />
            <BookList />
        </Grid> 
    )
}

export default HomePage