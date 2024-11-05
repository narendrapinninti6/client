import React from 'react';
import Product from './Product'; 
import './Product.css';

const Teapoys = () => {
    const products = [
        {
            image: '../images/Living/Cornersofas/t1.png',
            name: 'Product 1',
            price: '29,999'
        },
        {
            image: '../images/Living/Cornersofas/t2.png',
            name: 'Product 2',
            price: '49,999'
        },
        {
            image: '../images/Living/Cornersofas/t4.png',
            name: 'Product 4',
            price: '39,999'
        },
        {
            image: '../images/Living/Cornersofas/t5.png',
            name: 'Product 5',
            price: '39,999'
        },
        {
            image: '../images/Living/Cornersofas/t6.png',
            name: 'Product 6',
            price: '39,999'
        },
        {
            image: '../images/Living/Cornersofas/t3.png',
            name: 'Product 3',
            price: '39,999'
        },
        {
            image: '../images/Living/Cornersofas/t8.png',
            name: 'Product 8',
            price: '39,999'
        },
        {
            image: '../images/Living/Cornersofas/t7.png',
            name: 'Product 8',
            price: '39,999'
        }
        ,
        {
            image: '../images/Living/Cornersofas/t9.png',
            name: 'Product 9',
            price: '39,999'
        },
        {
            image: '../images/Living/Cornersofas/t10.png',
            name: 'Product 10',
            price: '39,999'
        },
        {
            image: '../images/Living/Cornersofas/t11.png',
            name: 'Product 11',
            price: '39,999'
        },
        {
            image: '../images/Living/Cornersofas/t12.png',
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

export default Teapoys;
