import { ActionType } from "../../types"

export const stringMiddleware = () => (next: any) => (action: ActionType) => {
    if (typeof action === 'string')
            return next({
                type: action
            })
    return next(action)
}