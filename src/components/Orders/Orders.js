import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
                {
                    cart.lenght === 0 && <h2>No Items for Review. Please <Link to='/'>Shop More</Link></h2>
                }

            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
                <Link to='/shipping'>
                <button>Proceed Shipping</button>
                </Link>
            </div>
        </div>
    );
};

export default Orders;