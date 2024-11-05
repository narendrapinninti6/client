import React from 'react';
import Product from './Product'; 
import './Product.css';

const Mattress = () => {
    const products = [
        {
            image: '../images/Bedrooms/Mattress/m1.jpg',
            name: 'Product 1',
            price: '29,999',
            
        },
        {
            image: '../images/Bedrooms/Mattress/m2.jpg',
            name: 'Product 2',
            price: '49,999',
           
        },
        {
            image: '../images/Bedrooms/Mattress/m4.jpg',
            name: 'Product 4',
            price: '39,999',
           
        },
        {
            image: '../images/Bedrooms/Mattress/m5.jpg',
            name: 'Product 5',
            price: '39,999',
          
        },
        {
            image: '../images/Bedrooms/Mattress/m6.jpg',
            name: 'Product 6',
            price: '39,999',
      
        },
        {
            image: '../images/Bedrooms/Mattress/m3.jpg',
            name: 'Product 3',
            price: '39,999',
      
        },
        {
            image: '../images/Bedrooms/Mattress/m8.jpg',
            name: 'Product 8',
            price: '39,999',
       
        },
        {
            image: '../images/Bedrooms/Mattress/m9.jpg',
            name: 'Product 9',
            price: '39,999',
  
        },
        {
            image: '../images/Bedrooms/Mattress/m10.jpg',
            name: 'Product 10',
            price: '39,999',
    
        },
        {
            image: '../images/Bedrooms/Mattress/m7.jpg',
            name: 'Product 7',
            price: '39,999',
   
        },
        {
            image: '../images/Bedrooms/Mattress/m11.jpg',
            name: 'Product 11',
            price: '39,999',
    
        },
        {
            image: '../images/Bedrooms/Mattress/m12.jpg',
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

export default Mattress;