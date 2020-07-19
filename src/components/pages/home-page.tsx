import React from 'react'
import { Grid } from 'semantic-ui-react'

import BookListContainer from '../book-list' 
import SortingBlock  from '../sorting-block'

const HomePage : React.FC = () => {
    return(
        <Grid>
            <SortingBlock />
            <BookListContainer />
        </Grid> 
    )
}

export default HomePage