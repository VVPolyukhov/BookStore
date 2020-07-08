// Actions //

export type ActionType = {
    type: string,
    payload?: any
}

// Data //

export type BookType = {
    id: number
    title: string
    author: string
    image: string
    price: number
    rating: number
}

export type ErrorType = string | boolean

export type CartItemType = {
    id?: number,
    count?: number,
    title?: string,
    total?: number
}

