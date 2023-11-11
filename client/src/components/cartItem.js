import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartItem(props) {

    

    const [form, setForm] = useState({
        id: props.item._id,
        quantity: 0
    })

    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmitUpdate(e) {
        e.preventDefault();

        const updatedItem = { ...form };
        
        await fetch(`http://localhost:5000/cart/update/${props.item._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedItem)
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({ id: props.item.id, quantity: 0})
        navigate("/cart");
    }

    async function onSubmitDelete(e) {
        e.preventDefault();
        
        await fetch(`http://localhost:5000/cart/delete/${props.item._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .catch(error => {
            window.alert(error);
            return;
        });
        
        navigate("/cart");
    }

    return (
        <div className="card" style={{"width": 350 + 'px'}}>
            <div className="card-body">
                <h2 className="card-title">{props.item.productName}</h2>
                <p className="card-text">In cart: {props.item.quantity}</p>
                <form className="form-group" onSubmit={onSubmitUpdate}>
                    <label className="d-block">Update quantity: </label>
                    <input type="number" name="quantity" onChange={(e) => updateForm({quantity: parseInt(e.target.value)})} />
                    <input type="submit" value="Update" className="btn btn-primary"/>
                </form>
                <form className="form-group" onSubmit={onSubmitDelete}>
                    <input type="submit" value="Delete" className="d-block mt-3 btn btn-danger"/>
                </form>
            </div>
        </div>
    )
}
