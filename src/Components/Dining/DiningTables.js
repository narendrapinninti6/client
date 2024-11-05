import React from 'react';
import Product from './Product'; 
import './Product.css';

const DiningTables = () => {
    const products = [
        {
            image: '../images/Dining/Diningsets/1.jpg',
            name: 'Product 1',
            price: '29,999',
            
        },
        {
            image: '../images/Dining/Diningsets/2.jpg',
            name: 'Product 2',
            price: '49,999',
           
        },
        {
            image: '../images/Dining/Diningsets/4.jpg',
            name: 'Product 4',
            price: '39,999',
           
        },
        {
            image: '../images/Dining/Diningsets/5.jpg',
            name: 'Product 5',
            price: '39,999',
          
        },
        {
            image: '../images/Dining/Diningsets/6.jpg',
            name: 'Product 6',
            price: '39,999',
      
        },
        {
            image: '../images/Dining/Diningsets/3.jpg',
            name: 'Product 3',
            price: '39,999',
      
        },
        {
            image: '../images/Dining/Diningsets/8.jpg',
            name: 'Product 8',
            price: '39,999',
       
        },
        {
            image: '../images/Dining/Diningsets/9.jpg',
            name: 'Product 9',
            price: '39,999',
  
        },
        {
            image: '../images/Dining/Diningsets/10.jpg',
            name: 'Product 10',
            price: '39,999',
    
        },
        {
            image: '../images/Dining/Diningsets/11.jpg',
            name: 'Product 11',
            price: '39,999',
   
        },
        {
            image: '../images/Dining/Diningsets/12.jpg',
            name: 'Product 12',
            price: '39,999',
      
        },
        {
            image: '../images/Dining/Diningsets/7.jpg',
            name: 'Product 7',
            price: '39,999',
   
        }

    ];

    return (
        <div className="dining-container">
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

export default DiningTables;