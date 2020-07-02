export const loggerMiddleware = () => next => action => {
    console.group('Dispatching: ')

    console.log('Action: ', action.type)
    action.payload && console.log('Payload: ', action.payload)
    
    console.groupEnd()
    
    return next(action)
}