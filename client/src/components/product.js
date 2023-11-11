import React, {useState} from 'react';
import { useNavigate } from "react-router";

export default function Product(props) {


    const [form, setForm] = useState({
        productId: props.product._id,
        productName: props.product.name,
        quantity: 1
    });

    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const newItem = { ...form };
        
        await fetch("http://localhost:5000/cart/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({ productId: "", productName: "", quantity: 0})
        navigate("/cart");
    }

    return (
        <div className="card" style={{"width": 275 + 'px'}}>
            <div className="card-body">
                <h2 className="card-title">{props.product.name}</h2>
                <p className="card-text">${props.product.price['$numberDecimal'].toLocaleString()}</p>
                <form className="form-group" onSubmit={onSubmit}>
                    <label className="d-block">Quantity: </label>
                    <select name="quantity" 
                            onChange={(e) => updateForm({
                                quantity: parseInt(e.target.value)
                            })}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                    <input type="submit" value="Add to Cart" className="d-block mt-3 btn btn-primary"/>
                </form>
            </div>
        </div>
    );
}