import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products, previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart);
    
    const handleRemoveItem = (id) =>{
        const remainingProducts = cart.filter(product => product.id !== id);
        setCart(remainingProducts);
        removeFromDb(id);
    }

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem 
                        key={product.id} 
                        product={product}
                        handleRemoveItem={handleRemoveItem}>
                        </ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;