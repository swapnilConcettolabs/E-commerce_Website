import React from 'react'
import '../index.css'
import headphones from '../assets/img/headphones.jpg'
import camera from '../assets/img/camera.jpg'
import watch from '../assets/img/watch.jpg'



export const ProductSection = () => {
    return (
        <section className="product-section">
            <h1>Our Products</h1>
            <div className='underLine'></div>
            <div className="card-container">
                <div className="card">
                    <img src={headphones} alt="Product_1" />
                    <p> SonicWave X1 Deluxe Over-Ear Wireless Headphones</p>
                    <h3 className='price'> $129.99</h3>
                    <button className="add-to-cart">Add To Cart</button>
                </div>
                <div className="card">
                    <img src={watch} alt="Product_2" />
                    <p> ChronoMaster X1 Premium Chronograph Watch</p>
                    <h3 className='price'> $399.99</h3>
                    <button className="add-to-cart">Add To Cart</button>
                </div>
                <div className="card">
                    <img src={camera} alt="Product_3" />
                    <p> UltraCapture X1 Pro Series Professional DSLR Camera</p>
                    <h3 className='price'> $1299.99</h3>
                    <button className="add-to-cart">Add To Cart</button>
                </div>
                {/* <div class="card">
          <img src="./img/sunglasses.jpg">
          <p> SolarShade X1 Polarized Sunglasses</p>
          <h3> $79.99</h3>
          <button class="add-to-cart">Add To Cart</button>
      </div> */}
            </div>
        </section>

    )
}
