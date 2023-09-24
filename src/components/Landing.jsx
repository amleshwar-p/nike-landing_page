import React from 'react'
import shoe from "../images/shoe_image.png"

export const Landing = () => {
    return (
        <div className='land-page'>
            <div className='container'>
                <div className='left-side'>
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className='shop-buttons'>
                        <button className='shop-now'>
                            Shop Now
                        </button>
                        <button className='category'>
                            Category
                        </button>
                    </div>
                </div>
                <div className='right-side'>
                    <img src={shoe} className='shoe-img'></img>
                </div>

            </div>
        </div>
    )
}
