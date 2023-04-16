import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity, toppings, size} = cartItem;
    return(
        <div className='cart-item-container'>
            <div className='cart-item-image'>
              
              <img src={imageUrl} alt='item'/> 

            </div >
            <div className='cart-item-details'>
                <div className='cart-info-1'>
                        <div className='cart-item-name'>
                            {name}
                        </div>

                            <div className='cart-item-price'>
                            {quantity} x ₹{price}
                            </div>
                </div>
                <div className='cart-info-2'>
                    <div className='cart-item-toppings'>
                        {toppings.map((topping) => (
                            <div key={topping} className='cart-item-topping'>
                                {topping}
                                </div>
                        ))}
                    </div>
                    <div className='cart-item-size'>
                        {size}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;