import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import "./cart.style.scss";

const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    return (
        <div className="cart">
            <h1>Cart</h1>
            <div className="cart-items">
                    {cartItems.length === 0 ? <span className="empty-message">Your cart is empty</span> : 
                    cartItems.map((item) => (
                        <>
                        <CartItem key={item.id} cartItem={item}/>
                        <hr/>
                        </>
                    ))}
                
            </div>
        </div>
    )
}

export default Cart;