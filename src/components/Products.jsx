import React from 'react'
import { Product } from './Product'

export const Products = ({products,onAddToCart}) => {
    return (
        <section className="product-section">
            <h1>Our Products</h1>
            <div className='underLine'></div>
            <div className="card-container">
                {products.map((product)=> {
                    return <Product key={product.id} {...product} onAddToCart={onAddToCart} />
                })}
            </div>

        </section>
    )
}
