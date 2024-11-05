import React from 'react';
import Product from './Product'; 
import './Product.css';

const Blankets = () => {
    const products = [
        {
            image: '../images/Bedrooms/Blankets/b1.jpg',
            name: 'Product 1',
            price: '29,999',
            
        },
        {
            image: '../images/Bedrooms/Blankets/b2.jpg',
            name: 'Product 2',
            price: '49,999',
           
        },
        {
            image: '../images/Bedrooms/Blankets/b4.jpg',
            name: 'Product 4',
            price: '39,999',
           
        },
        {
            image: '../images/Bedrooms/Blankets/b5.jpg',
            name: 'Product 5',
            price: '39,999',
          
        },
        {
            image: '../images/Bedrooms/Blankets/b6.jpg',
            name: 'Product 6',
            price: '39,999',
      
        },
        {
            image: '../images/Bedrooms/Blankets/b3.jpg',
            name: 'Product 3',
            price: '39,999',
      
        },
        {
            image: '../images/Bedrooms/Blankets/b8.jpg',
            name: 'Product 8',
            price: '39,999',
       
        },
        {
            image: '../images/Bedrooms/Blankets/b9.jpg',
            name: 'Product 9',
            price: '39,999',
  
        },
        {
            image: '../images/Bedrooms/Blankets/b10.jpg',
            name: 'Product 10',
            price: '39,999',
    
        },
        {
            image: '../images/Bedrooms/Blankets/b7.jpg',
            name: 'Product 7',
            price: '39,999',
   
        },
        {
            image: '../images/Bedrooms/Blankets/b11.jpg',
            name: 'Product 11',
            price: '39,999',
    
        },
        {
            image: '../images/Bedrooms/Blankets/b12.jpg',
            name: 'Product 12',
            price: '39,999',
   
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

export default Blankets;