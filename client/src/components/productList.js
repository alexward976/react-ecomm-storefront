import React, { useState, useEffect } from 'react';
import Product from './product';

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('http://localhost:5000/');
            if(!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const products = await response.json();
            setProducts(products);
        }
        getProducts();
        return;
    }, [products.length]);

    function productList() {
        return products.map((product) => {
            return (
                <Product 
                    product={product}
                    key={product._id}
                />
            );
        })
    }

    return (
        <div className='container pl-5'>
            <h1 className="mt-5">Product List</h1>
            <div className="d-flex flex-wrap mt-5">
                {productList()}
            </div>
        </div>
    )
}