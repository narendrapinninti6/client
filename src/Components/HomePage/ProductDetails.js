import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import { useWishlist } from '../Wishlist/WishlistContext';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { IoShareSocialSharp } from 'react-icons/io5';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './ProductDetails.css';
import '@google/model-viewer';


const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const navigate = useNavigate();

  const products = [
    {
      id: '1',
      name: 'Modern Sofa',
      description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
      price: '49,999',
      images: {
        Gray: '/images/base1.jpg',
        Yellow: '/images/bc1.jpeg',
      },
      colors: { Gray: '#808080', Yellow: '#FFFF00'},
      glbFile: '/images/base1.glb',
    },
    {
        id: '2',
        name: 'Product 2',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
        price: '49,999',
        images: {
            Red: '/images/base2.jpg',
            Blue: '/images/bc2.jpeg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/base2.glb',

    },
    {
        id: '3',
        name: 'Corner Sofa',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
        price: '49,999',
        images: {
            Red: '/images/base3.jpg',
            Blue: '/images/bc3.jpeg',
        },
        colors: { Red: '#333333', Blue: '#3c4d03' },
        glbFile: '/images/base3.glb',

    },
    {
        id: '4',
        name: 'Product 4',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.', 
        price: '49,999',
        images: {
            Red: '/images/base4.jpg',
            Blue: '/images/bc4.jpeg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/base4.glb',
    },
    {
        id: '5',
        name: 'Product 5',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
        price: '49,999',
        images: {
            Red: '/images/base5.jpg',
            Blue: '/images/bc5.jpeg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/base5.glb',
    },
    {
        id: '6',
        name: 'Product 6',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
        price: '49,999',
        images: {
            Red: '/images/base6.jpg',
            Blue: '/images/bc6.jpeg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/base6.glb',
    },
   
    {
        id: '7',
        name: 'Product 7',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
        price: '49,999',
        images: {
            Red: '/images/base7.jpg',
            Blue: '/images/bc7.jpeg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/base7.glb',
    },
   
    {
        id: '8',
        name: 'Product 8',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
        price: '49,999',
        images: {
            Red: '/images/base8.jpg',
            Blue: '/images/bc8.jpeg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/base8.glb',
    },
   
    {
        id: '9',
        name: 'Product 9',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
        price: '49,999',
        images: {
            Red: '/images/base9.jpg',
            Blue: '/images/bc9.jpeg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/base9.glb',
    },
   
    {
        id: '10',
        name: 'Product 10',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
        price: '49,999',
        images: {
            Red: '/images/base10.jpg',
            Blue: '/images/bc10.jpeg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/base10.glb',
    },
   
    {
        id: '11',
        name: 'Product 11',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
        price: '49,999',
        images: {
            Red: '/images/base11.jpg',
            Blue: '/images/bc11.jpeg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/base11.glb',
    },
   
    {
        id: '12',
        name: 'Product 12',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
        price: '49,999',
        images: {
            Red: '/images/base12.jpg',
            Blue: '/images/bc12.jpeg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/base12.glb',
    },
   



    {
        id: '13',
        name: 'Product 13',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',           
        price: '49,999',
        images: {
            Red: '/images/base13.jpg',
            Blue: '/images/bc13.jpeg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/base13.glb',
    },
   
    {
        id: '14',
        name: 'Product 14',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
        price: '49,999',
        images: {
            Red: '/images/base14.jpg',
            Blue: '/images/bc14.jpeg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/base14.glb',
    },
   
    {
        id: '15',
        name: 'Product 15',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
        price: '49,999',
        images: {
            Red: '/images/base15.jpg',
            Blue: '/images/bc15.jpeg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/base15.glb',
    },
   
    {
        id: '16',
        name: 'Product 16',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
        price: '49,999',
        images: {
            Red: '/images/base16.jpg',
            Blue: '/images/bc16.jpeg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/16.glb',
    },
    {
        id: '17',
        name: 'Product 17',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
        price: '49,999',
        images: {
            Red: '/images/pro9.jpg',
            Blue: '/images/pro10.jpg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/sofachair1.glb',
    },
   
    {
        id: '18',
        name: 'Product 18',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
        price: '49,999',
        images: {
            Red: '/images/pro10.jpg',
            Blue: '/images/pro11.jpg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/sofachair1.glb',
    },
   
    {
        id: '19',
        name: 'Product 19',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
        price: '49,999',
        images: {
            Red: '/images/pro11.jpg',
            Blue: '/images/pro12.jpg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/sofachair1.glb',
    },
   
    {
        id: '20',
        name: 'Product 20',
        description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
        price: '49,999',
        images: {
            Red: '/images/pro12.jpg',
            Blue: '/images/pro13.jpg',
        },
        colors: { Red: '#f2f7f7', Blue: '#030e6b' },
        glbFile: '/images/sofachair1.glb',
    },
   


    // Products from the Sale component
    { id: '21', name: 'Product 2', description: 'This product is even better with extra features.', price: '49,999', images: {
        Red: '/images/pro5.jpg',
        Blue: '/images/pro6.jpg',
    },
    colors: ['Red', 'Blue'] },
    { id: '22', name: 'Product 3', description: 'An affordable product that meets all your needs.', price: '29,999', images: {
        Red: '/images/pro6.jpg',
        Blue: '/images/pro7.jpg',
    },
    colors: ['Red', 'Blue'] },
    { id: '23', name: 'Product 4', description: 'An affordable product that meets all your needs.', price: '52,999', images: {
        Red: '/images/pro7.jpg',
        Blue: '/images/pro8.jpg',
    },
    colors: ['Red', 'Blue'] },
    { id: '24', name: 'Product 7', description: 'This is a great product with amazing features.', price: '39,999', images: {
        Red: '/images/pro8.jpg',
        Blue: '/images/pro9.jpg',
    },
    colors: ['Red', 'Blue'] },
    { id: '25', name: 'Product 1', description: 'An affordable product that meets all your needs.', price: '52,999', images: {
        Red: '/images/pro9.jpg',
        Blue: '/images/pro10.jpg',
    },
    colors: ['Red', 'Blue'] },
    { id: '26', name: 'Product 4', description: 'This is a great product with amazing features.', price: '39,999', images: {
        Red: '/images/pro10.jpg',
        Blue: '/images/pro11.jpg',
    },
    colors: ['Red', 'Blue'] },
    { id: '27', name: 'Product 5', description: 'This product is even better with extra features.', price: '49,999', images: {
        Red: '/images/pro11.jpg',
        Blue: '/images/pro12.jpg',
    },
    colors: ['Red', 'Blue'] },
    { id: '28', name: 'Product 6', description: 'This is a great product with amazing features.', price: '39,999', images: {
        Red: '/images/pro12.jpg',
        Blue: '/images/pro5.jpg',
    },
    colors: ['Red', 'Blue'] },

  ];

  const product = products.find((p) => p.id === productId);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [quantities, setQuantities] = useState(Array(products.length).fill(1));
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product ? Object.keys(product.colors)[0] : '');

  const productIndex = product ? products.findIndex((p) => p.id === productId) : -1;

  useEffect(() => {
    if (product) {
      const inWishlist = wishlist.some((item) => item.id === productId);
      setIsInWishlist(inWishlist);
    }
  }, [product, wishlist, productId]);

  const handleAddToCart = () => {
    if (product) {
      const selectedQuantity = quantities[productIndex];
      addToCart({
        ...product,
        quantity: selectedQuantity,
        color: selectedColor,
        image: product.images[selectedColor],
      });
      setIsAddedToCart(true);
    }
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const handleWishlistToggle = () => {
    if (product) {
      if (isInWishlist) {
        removeFromWishlist(product.id);
      } else {
        addToWishlist({
          ...product,
          color: selectedColor,
          image: product.images[selectedColor],
        });
      }
      setIsInWishlist(!isInWishlist);
    }
  };

  const handleShareToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleShare = (platform) => {
    const shareData = {
      title: product.name,
      text: `Check out this amazing product: ${product.name} for ₹${product.price}`,
      url: window.location.href,
    };

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`, '_blank');
        break;
      case 'instagram':
        window.open(`https://instagram.com/?url=${encodeURIComponent(shareData.url)}`, '_blank');
        break;
      default:
        alert('Unsupported platform');
    }

    setShowDropdown(false);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-details">
      <div className="image-section">
        <img src={product.images[selectedColor]} alt={product.name} />
        {/* Button to open 3D view on a new page */}
        {product.glbFile && (
          <Link to={`/product/${productId}/3dview`}>
            <button className="view-3d-button">View 3D Model</button>
          </Link>
        )}
      </div>

      <div className="details-section">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">Price: ₹{product.price}<del className='del'>₹ 79,000</del> <span className='inc'>(Inc of all taxes)</span></p>
        
        {/* Color Selection */}
        <div className="color-selection">
          <label>Select Color:</label>
          {Object.keys(product.colors).map((color) => (
            <button
              key={color}
              className={`color-button ${selectedColor === color ? 'selected' : ''}`}
              onClick={() => handleColorChange(color)}
              style={{
                backgroundColor: product.colors[color],
                border: selectedColor === color ? '2px solid black' : '1px solid lightgray',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                margin: '5px',
              }}
            />
          ))}
        </div>

        <div className="wishlist-share">
                    <button 
                        className="product-wish1" 
                        onClick={handleWishlistToggle}
                        style={{ color: 'black' }}
                    >
                        {isInWishlist ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart style={{ color: 'black' }} />}
                        <span style={{ color: 'black' }}>
                            {isInWishlist ? ' Wishlisted' : ' Add to Wishlist'}
                        </span>
                    </button>
                    <button className="share-button" onClick={handleShareToggle} style={{ marginLeft: '8px' }}>
                        <IoShareSocialSharp style={{ marginRight: '4px' }} />
                        <span> Share</span>
                    </button>

                    {showDropdown && (
                        <div className="share-dropdown">
                            <button className='dd' onClick={() => handleShare('facebook')}><FaFacebook className='facebook'/> Facebook</button>
                            <button className='dd' onClick={() => handleShare('whatsapp')}><FaWhatsapp className="whatsapp"/> WhatsApp</button>
                            <button className='dd' onClick={() => handleShare('instagram')}><FaInstagram className='instagram' /> Instagram</button>
                        </div>
                    )}
                </div>

                <label className='qua'>
                    Quantity:
                    <select
                        value={quantities[productIndex]}
                        onChange={(e) => setQuantities(prev => {
                            const newQuantities = [...prev];
                            newQuantities[productIndex] = e.target.value;
                            return newQuantities;
                        })}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </label>

                <div className="product-buttons">
                    {!isAddedToCart ? (
                        <button className="product-cart1" onClick={handleAddToCart}>ADD TO CART</button>
                    ) : (
                        <button className="product-cart1" onClick={handleGoToCart}>GO TO CART</button>
                    )}
                    <button className='buy-now1'>BUY NOW</button>
                </div>
            </div>
      </div>
  );
};

export default ProductDetails;