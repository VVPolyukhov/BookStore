import React from 'react'
import { Loader } from 'semantic-ui-react'

import './spinner.scss'

const Spinner: React.FC = () => {
    return(
        <Loader active
                inline='centered'
                className='spinner'>
                    Загрузка...
        </Loader>
    )
}

export default Spinner