import {createAction} from '../reducer.utils'
import {CART_ACTION_TYPES} from './cart.type'


    
export const addCartItem = (topping, size, itemToAdd, cartItems) => {
    const newCartItems = [...cartItems];
    const existingCartItem = newCartItems.find(item => item.item_id === itemToAdd.id && item.size === size && item.toppings.every((topping) => item.toppings.includes(topping)));
    console.log(existingCartItem, itemToAdd)
    if(existingCartItem){
        existingCartItem.quantity += 1;
    }else{
        const cartItem = {
            id: cartItems.length === 0 ? 1 : cartItems[cartItems.length - 1].id + 1,
            item_id: itemToAdd.id,
            name: itemToAdd.name,
            price: itemToAdd.price,
            size: size,
            toppings: topping,
            quantity: 1,
            imageUrl: itemToAdd.img_url
    
     }
     newCartItems.push(cartItem);
    }
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)

    
}

export const removeCartItem = (cartItemToRemove, cartItems) => {
    const newCartItems = cartItems.filter(item => item.id !== cartItemToRemove.id);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearCart = () => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, [])
}

// Path: treflo-assignment/src/store/cart/cart.type.js