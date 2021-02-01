import React from 'react'
import Product from './Product'

function Bakery() {
    return (
        <div className="vegies">
        <div className="vegies-container">
        <div className = 'head-name'>
            <h1> Bakery </h1>
        </div>

        <div className="vegies-row">
        <Product
        id="25"
        title="Bread 1 Loaf"
        price={25}
        image="Bread.png" />

        <Product
        id="26"
        title="Burger Buns Pack of 4"
        price={30}
        image="Burger Buns.png" />

        <Product
        id="27"
        title="Pizza Base Pack of 2"
        price={20}
        image="Pizza Base.png" />
        </div>

        <div className="vegies-row">
        <Product
        id="28"
        title="Pav Pack of 6"
        price={40}
        image="Pav.png" />

        <Product
        id="29"
        title="Britania Rusk 200 gm"
        price={60}
        image="Britania Rusk.png" />
        </div>


        </div>
        
    </div>
    )
}

export default Bakery
