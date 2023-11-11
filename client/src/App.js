import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import ProductList from './components/productList';
import Cart from './components/cart';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/productList" element={<ProductList />} />
                <Route exact path="/cart" element={<Cart />} />
            </Routes>
        </div>
    )
}

export default App;