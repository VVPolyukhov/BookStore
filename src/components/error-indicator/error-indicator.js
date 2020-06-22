import React from 'react'
import { Message } from 'semantic-ui-react'

import './error-indicator.scss'

const ErrorIndicator = () => {
    return (
        <Message negative compact className='error-indicator'>
            <Message.Header>Произошла ошибка!</Message.Header>
            <p>Пожалуйста, перезагрузите страницу...</p>
        </Message>
    )
}

export default ErrorIndicator