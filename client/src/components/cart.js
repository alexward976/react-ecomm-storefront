import React, { useState, useEffect } from 'react';
import CartItem from './cartItem';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        async function getCartItems() {
            const response = await fetch('http://localhost:5000/cart');
            if(!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const cartItems = await response.json();
            setCartItems(cartItems);
        }
        getCartItems();
        return;
    }, [cartItems.length]);

    function cart() {
        return cartItems.map((item) => {
            return <CartItem
                        item={item}
                        key={item._id}
                    />
        })
    }

    return (
        <div className='container pl-5'>
            <h1 className="mt-5">Your Cart</h1>
            <div className="d-flex flex-column mt-3">
                {cart()}
            </div>
        </div>
    )
}