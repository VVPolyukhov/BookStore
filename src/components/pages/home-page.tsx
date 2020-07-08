import React from 'react'
import { Grid } from 'semantic-ui-react'

import BookListContainer from '../book-list' 
import SortingBlockContainer  from '../sorting-block'

const HomePage : React.FC = () => {
    return(
        <Grid>
            <SortingBlockContainer />
            <BookListContainer />
        </Grid> 
    )
}

export default HomePage