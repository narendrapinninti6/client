import React from 'react';
import Product from './Product'; 
import './Product.css';

const KingStorage = () => {
    const products = [
        {
            image: '../images/Bedrooms/KingStorage/ks1.jpg',
            name: 'Product 1',
            price: '29,999',
            
        },
        {
            image: '../images/Bedrooms/KingStorage/ks2.jpg',
            name: 'Product 2',
            price: '49,999',
           
        },
        {
            image: '../images/Bedrooms/KingStorage/ks4.jpg',
            name: 'Product 4',
            price: '39,999',
           
        },
        {
            image: '../images/Bedrooms/KingStorage/ks5.jpg',
            name: 'Product 5',
            price: '39,999',
          
        },
        {
            image: '../images/Bedrooms/KingStorage/ks6.jpg',
            name: 'Product 6',
            price: '39,999',
      
        },
        {
            image: '../images/Bedrooms/KingStorage/ks3.jpg',
            name: 'Product 3',
            price: '39,999',
      
        },
        {
            image: '../images/Bedrooms/KingStorage/ks8.jpg',
            name: 'Product 8',
            price: '39,999',
       
        },
        {
            image: '../images/Bedrooms/KingStorage/ks9.jpg',
            name: 'Product 9',
            price: '39,999',
  
        },
        {
            image: '../images/Bedrooms/KingStorage/ks10.jpg',
            name: 'Product 10',
            price: '39,999',
    
        },
        {
            image: '../images/Bedrooms/KingStorage/ks7.jpg',
            name: 'Product 7',
            price: '39,999',
   
        },
        {
            image: '../images/Bedrooms/KingStorage/ks11.jpg',
            name: 'Product 11',
            price: '29.99',
            
        },
        {
            image: '../images/Bedrooms/KingStorage/ks12.jpg',
            name: 'Product 12',
            price: '49.99',
           
        }

    ];

    return (
        <div className="bedroom-container">
            <section className="products">
                {products.map((product, index) => (
                    <Product
                        key={index}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        detailsLink={product.detailsLink}
                    />
                ))}
            </section>
        </div>
    );
};

export default KingStorage;