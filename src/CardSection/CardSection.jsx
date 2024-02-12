import React from "react";
import { useCart } from "../context/CardContext";
import "./CardSection.css"

const CartSection = () => {
    const { cartItems } = useCart(); 

    const groupedCartItems = cartItems.reduce((acc, item) => {
        if (!acc[item.id]) {
            acc[item.id] = { ...item, count: 1 };
        } else {
            acc[item.id].count++;
        }
        return acc;
    }, {});

    const uniqueCartItems = Object.values(groupedCartItems);

    const totalPrice = uniqueCartItems.reduce(
        (acc, item) => acc + item.price * item.count, 0
    );

    return (
        <div className="cart-container">
            <h2>Tu Carrito de la Compra</h2>
            {uniqueCartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                        <img src={item.image} alt={item.title} />
                        <p className="item-count">{item.count}</p>
                    </div>
                    <div className="cart-item-details">
                        <p>{item.title}</p>
                        <p>Precio por unidad: ${item.price.toFixed(2)}</p>
                        <p>Precio total: ${(item.price * item.count).toFixed(2)}</p>
                    </div>
                </div>
            ))}
            <div className="total-price">
                <p>Total a pagar: ${totalPrice.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default CartSection;
