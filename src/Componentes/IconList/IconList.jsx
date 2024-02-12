import React from "react";
import PropTypes from "prop-types"; 
import { useCart } from "../../context/CardContext";

function IconsList({ onclickCartIcon }) {
    const { cartItems } = useCart();
    const cartItemCount = cartItems.length;

    return (
        <ul className="user-icons">
            <li className="cart-icon" onClick={onclickCartIcon}>
                &#128722;{cartItemCount > 0 && (
                    <span className="cart-count">{cartItemCount}</span>
                )}
            </li>
        </ul>
    );
}


IconsList.propTypes = {
    onclickCartIcon: PropTypes.func.isRequired,
};

export default IconsList;
