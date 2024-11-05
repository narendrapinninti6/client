import React from 'react';
import Product from './Product'; 
import './Product.css';

const Hydraulicbeds = () => {
    const products = [
        {
            image: '../images/Bedrooms/Hydraulicbeds/hc1.jpg',
            name: 'Product 1',
            price: '29,999',
            
        },
        {
            image: '../images/Bedrooms/Hydraulicbeds/hc2.jpg',
            name: 'Product 2',
            price: '49,999',
           
        },
        {
            image: '../images/Bedrooms/Hydraulicbeds/hc4.jpg',
            name: 'Product 4',
            price: '39,999',
           
        },
        {
            image: '../images/Bedrooms/Hydraulicbeds/hc5.jpg',
            name: 'Product 5',
            price: '39,999',
          
        },
        {
            image: '../images/Bedrooms/Hydraulicbeds/hc6.jpg',
            name: 'Product 6',
            price: '39,999',
      
        },
        {
            image: '../images/Bedrooms/Hydraulicbeds/hc3.jpg',
            name: 'Product 3',
            price: '39,999',
      
        },
        {
            image: '../images/Bedrooms/Hydraulicbeds/hc8.jpg',
            name: 'Product 8',
            price: '39,999',
       
        },
        {
            image: '../images/Bedrooms/Hydraulicbeds/hc9.jpg',
            name: 'Product 9',
            price: '39,999',
  
        },
        {
            image: '../images/Bedrooms/Hydraulicbeds/hc10.jpg',
            name: 'Product 10',
            price: '39,999',
    
        },
        {
            image: '../images/Bedrooms/Hydraulicbeds/hc7.jpg',
            name: 'Product 7',
            price: '39,999',
   
        },
        {
            image: '../images/Bedrooms/Hydraulicbeds/hc11.jpg',
            name: 'Product 11',
            price: '29.99',
            
        },
        {
            image: '../images/Bedrooms/Hydraulicbeds/hc12.jpg',
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

export default Hydraulicbeds;