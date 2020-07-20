import { ReducerType, CartItemType } from "../../types";

export const getCartItems = (state: ReducerType, props: any = null): Array<CartItemType> => {
    return state.shoppingCart.cartItems
}

export const getOrderTotal = (state: ReducerType): number => {
    return state.shoppingCart.orderTotal
}

export const getNumItems = (state: ReducerType): number => {
    return state.shoppingCart.numItems
}