import React from 'react'
import { withRouter } from 'react-router-dom';
import { History } from 'history';

interface ChildComponentProps {
    history : History
}

const BackToStore: React.FC<ChildComponentProps> = ( { history } ) => {
    return (
        <button className="btn btn-info"
            onClick={() => history.push('/')}>
            Вернуться к каталогу
        </button>
    )
}

export default withRouter(BackToStore)