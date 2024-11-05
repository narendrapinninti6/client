import React from 'react';
import Product from './Product'; 
import './Product.css';

const Bedroomsets = () => {
    const products = [
        {
            image: '../images/Combos/Bedroomsets/bs1.jpg',
            name: 'Product 1',
            price: '29,999',
            
        },
        {
            image: '../images/Combos/Bedroomsets/bs2.jpg',
            name: 'Product 2',
            price: '49,999',
          
        },
        {
            image: '../images/Combos/Bedroomsets/bs4.jpg',
            name: 'Product 4',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Bedroomsets/bs5.jpg',
            name: 'Product 5',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Bedroomsets/bs6.jpg',
            name: 'Product 6',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Bedroomsets/bs3.jpg',
            name: 'Product 3',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Bedroomsets/bs8.jpg',
            name: 'Product 8',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Bedroomsets/bs9.jpg',
            name: 'Product 9',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Bedroomsets/bs10.jpg',
            name: 'Product 10',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Bedroomsets/bs11.jpg',
            name: 'Product 11',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Bedroomsets/bs12.jpg',
            name: 'Product 12',
            price: '39,999',
           
        },
        {
            image: '../images/Combos/Bedroomsets/bs7.jpg',
            name: 'Product 7',
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

export default Bedroomsets;
