import {createAction} from '../reducer.utils'
import {CART_ACTION_TYPES} from './cart.type'

export const setCartItems = (cartItems) =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

    