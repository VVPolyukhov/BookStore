import { ReducerType } from "../../types"

export const getFilterBy = (state: ReducerType): string => {
    return state.filter.filterBy
}

export const getTerm = (state: ReducerType): string => {
    return state.filter.term
}