import React from 'react'
import { Loader } from 'semantic-ui-react'

import './spinner.css'

const Spinner = () => {
    return(
        <Loader active
                inline='centered'
                className='spinner'>
                    Загрузка...
        </Loader>
    )
}

export default Spinner