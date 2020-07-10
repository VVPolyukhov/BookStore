import { ActionType } from "../types"

export const loggerMiddleware = () => (next: any) => (action: ActionType) => {
    console.group('Dispatching: ')

    console.log('Action: ', action.type)
    action.payload && console.log('Payload: ', action.payload)
    
    console.groupEnd()
    
    return next(action)
}