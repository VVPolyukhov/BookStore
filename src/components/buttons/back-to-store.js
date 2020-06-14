import React from 'react'
import { withRouter } from 'react-router-dom';

const BackToStore = ( { history } ) => {
    return (
        <button className="btn btn-info"
            onClick={() => history.push('/')}>
            Вернуться к каталогу
        </button>
    )
}

export default withRouter(BackToStore)