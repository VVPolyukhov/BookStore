import { ReducerType, ActionType } from ".";

type CartItemType = {
  id?: number,
  count?: number,
  title?: string,
  total?: number
}

export type ShoppingCartReducerType = {
  cartItems: Array<CartItemType>,
  orderTotal: number,
  numItems: number
}

const updateCartItems = (cartItems: Array<CartItemType>, item: CartItemType, idx: number) : Array<CartItemType> => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (book: any, item = {}, quantity: number) : CartItemType => {

  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = 0 } : CartItemType = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  };
};

export const updateOrder = (state: ReducerType, bookId: number, quantity: number) : ShoppingCartReducerType => {

  const { bookList: { books }, shoppingCart: { cartItems }} = state;

  const book : any = books.find(({id}:any) => id === bookId);
  const itemIndex = cartItems.findIndex(({id}:any) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity)

  return {
    ...state.shoppingCart,
    numItems: state.shoppingCart.numItems + quantity,
    orderTotal: state.shoppingCart.orderTotal + quantity * book.price,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
};

const updateShoppingCart = (state: ReducerType, action: ActionType): ShoppingCartReducerType => {

  const initialState: ShoppingCartReducerType = {
    cartItems: [],
    orderTotal: 0,
    numItems: 0
  }

  if (state === undefined) {
    return initialState
  }

  switch(action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_BOOKS_REMOVED_FROM_CART':
      const item : any = state.shoppingCart.cartItems.find(({id} : any) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    case 'UPDATE_SHOPPING_CART':
      return {
        ...state.shoppingCart,
        cartItems: action.payload.cartItems,
        orderTotal: action.payload.orderTotal, 
        numItems: action.payload.numItems 
      }

    case 'CLEAR_SHOPPING_CART':
      return {
        ...state.shoppingCart,
        cartItems: [],
        orderTotal: 0,
        numItems: 0
      }
    
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;