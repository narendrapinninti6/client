import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import { useWishlist } from '../Wishlist/WishlistContext';
import './Product.css';

const Product = ({ image, name, price, description, detailsLink, id }) => {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [buttonText, setButtonText] = useState('Add to Cart');
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();

    // Handle Add to Cart logic
    const handleCartClick = () => {
        if (buttonText === 'Add to Cart') {
            addToCart({ id, image, name, price, description });
            setButtonText('Go to Cart');
        } else {
            navigate('/cart'); // Redirect to cart page
        }
    };

    // Handle Wishlist toggle logic
    const handleWishlistToggle = () => {
        if (isInWishlist) {
            removeFromWishlist(name);
        } else {
            addToWishlist({ id, image, name, price, description });
        }
        setIsInWishlist(!isInWishlist);
    };

    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-info">
                <h2 className="product-name">{name}</h2>
                <p className="product-description">{description}</p>
                <p className="product-price">₹ {price} <del>₹ 60,000</del></p>
                <div className="product-buttons">
                    <button 
                        className="product-wish"
                        onClick={handleWishlistToggle}
                        style={{ color: isInWishlist ? 'red' : 'black' }}
                    >
                        {isInWishlist ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <button className="product-cart" onClick={handleCartClick}>
                        {buttonText}
                    </button>
                    <button className="product-buy">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
