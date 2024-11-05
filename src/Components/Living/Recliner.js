import React from 'react';
import Product from './Product'; 
import './Product.css';

const Recliner = () => {
    const products = [
        {
            image: '../images/Living/Recliner/r1.jpg',
            name: 'Product 1',
            price: '29,999'
        },
        {
            image: '../images/Living/Recliner/r2.jpg',
            name: 'Product 2',
            price: '49,999'
        },
        {
            image: '../images/Living/Recliner/r4.jpg',
            name: 'Product 4',
            price: '39,999'
        },
        {
            image: '../images/Living/Recliner/r5.jpg',
            name: 'Product 5',
            price: '39,999'
        },
        {
            image: '../images/Living/Recliner/r6.jpg',
            name: 'Product 6',
            price: '39,999'
        },
        {
            image: '../images/Living/Recliner/r3.jpg',
            name: 'Product 3',
            price: '39,999'
        },
        {
            image: '../images/Living/Recliner/r8.jpg',
            name: 'Product 8',
            price: '39,999'
        },
        {
            image: '../images/Living/Recliner/r9.jpg',
            name: 'Product 9',
            price: '39,999'
        },
        {
            image: '../images/Living/Recliner/r10.jpg',
            name: 'Product 10',
            price: '39,999'
        },
        {
            image: '../images/Living/Recliner/r11.jpg',
            name: 'Product 11',
            price: '39,999'
        },
        {
            image: '../images/Living/Recliner/r7.jpg',
            name: 'Product 7',
            price: '39,999'
        },
        {
            image: '../images/Living/Recliner/r1.jpg',
            name: 'Product 12',
            price: '39,999'
        }
    ];

    return (
        <div className="sofas-container">
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

export default Recliner;