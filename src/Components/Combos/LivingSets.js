import React from 'react';
import Product from './Product'; 
import './Product.css';

const Springmattress = () => {
    const products = [
        {
            image: '../images/Combos/Livingsets/ss1.jpg',
            name: 'Product 1',
            price: '29,999',
            
        },
        {
            image: '../images/Combos/Livingsets/ss2.jpg',
            name: 'Product 2',
            price: '49,999',
          
        },
        {
            image: '../images/Combos/Livingsets/ss4.jpg',
            name: 'Product 4',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Livingsets/ss5.jpg',
            name: 'Product 5',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Livingsets/ss6.jpg',
            name: 'Product 6',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Livingsets/ss3.jpg',
            name: 'Product 3',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Livingsets/ss8.jpg',
            name: 'Product 8',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Livingsets/ss9.jpg',
            name: 'Product 9',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Livingsets/ss7.jpg',
            name: 'Product 7',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Livingsets/ss10.jpg',
            name: 'Product 10',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Livingsets/ss11.jpg',
            name: 'Product 11',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Livingsets/ss12.jpg',
            name: 'Product 12',
            price: '39,999',
           
        }

    ];

    return (
        <div className="mattress-container">
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

export default Springmattress;
