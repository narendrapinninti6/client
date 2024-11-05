import React from 'react';
import Product from './Product'; 
import './Product.css';

const Desks = () => {
    const products = [
        {
            image: '../images/Office/Desks/1.jpg',
            name: 'Product 1',
            price: '29,999',
           
        },
        {
            image: '../images/Office/Desks/7.jpg',
            name: 'Product 2',
            price: '49,999',
          
        },
        {
            image: '../images/Office/Desks/4.jpg',
            name: 'Product 4',
            price: '39,999',
           
        },
        {
            image: '../images/Office/Desks/5.jpeg',
            name: 'Product 5',
            price: '39,999',
           
        },
        {
            image: '../images/Office/Desks/6.jpg',
            name: 'Product 6',
            price: '39,999',
           
        },
        {
            image: '../images/Office/Desks/3.jpg',
            name: 'Product 3',
            price: '39,999',
           
        },
        {
            image: '../images/Office/Desks/8.jpg',
            name: 'Product 8',
            price: '39,999',
           
        },
        {
            image: '../images/Office/Desks/2.jpg',
            name: 'Product 9',
            price: '39,999',
           
        },
        {
            image: '../images/Office/Desks/9.jpg',
            name: 'Product 10',
            price: '39,999',
           
        },
        {
            image: '../images/Office/Desks/11.jpg',
            name: 'Product 11',
            price: '39,999',
           
        },
        {
            image: '../images/Office/Desks/12.jpg',
            name: 'Product 12',
            price: '39,999',
           
        },
        {
            image: '../images/Office/Desks/10.jpg',
            name: 'Product 10',
            price: '39,999',
           
        }

    ];

    return (
        <div className="counter-container">
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

export default Desks;
