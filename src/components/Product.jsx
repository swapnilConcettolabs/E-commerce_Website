import React, { useEffect, useState } from 'react'

export const Product = ({ name, image, price,onAddToCart }) => {

    return (
        <div className="card">
            <img src={image} alt={name} />
            <p> {name}</p>
            <h3 className='price'> ${price}</h3>
            <button className="add-to-cart" onClick={onAddToCart}>Add To Cart</button>
        </div>
    )
}
