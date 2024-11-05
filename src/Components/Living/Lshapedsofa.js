import React from 'react';
import Product from './Product'; 
import './Product.css';

const Lshapedsofa = () => {
    const products = [
        {
            image: '../images/Living/Lshapedsofa/ls1.jpg',
            name: 'Product 1',
            price: '29,999'
        },
        {
            image: '../images/Living/Lshapedsofa/ls2.jpg',
            name: 'Product 2',
            price: '49,999'
        },
        {
            image: '../images/Living/Lshapedsofa/ls4.jpg',
            name: 'Product 4',
            price: '39,999'
        },
        {
            image: '../images/Living/Lshapedsofa/ls5.jpg',
            name: 'Product 5',
            price: '39,999'
        },
        {
            image: '../images/Living/Lshapedsofa/ls6.jpg',
            name: 'Product 6',
            price: '39,999'
        },
        {
            image: '../images/Living/Lshapedsofa/ls3.jpg',
            name: 'Product 3',
            price: '39,999'
        },
        {
            image: '../images/Living/Lshapedsofa/ls8.jpg',
            name: 'Product 8',
            price: '39,999'
        },
        {
            image: '../images/Living/Lshapedsofa/ls9.jpg',
            name: 'Product 9',
            price: '39,999'
        },
        {
            image: '../images/Living/Lshapedsofa/ls10.jpg',
            name: 'Product 10',
            price: '39,999'
        },
        {
            image: '../images/Living/Lshapedsofa/ls11.jpg',
            name: 'Product 11',
            price: '39,999'
        },
        {
            image: '../images/Living/Lshapedsofa/ls7.jpg',
            name: 'Product 7',
            price: '39,999'
        },
        {
            image: '../images/Living/Lshapedsofa/ls1.jpg',
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

export default Lshapedsofa;