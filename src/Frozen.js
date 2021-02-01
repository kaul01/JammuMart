import React from 'react'
import Product from './Product'
import "./Vegies.css"


function Frozen() {
    return (
        <div className="vegies">
            <div className="vegies-container">
            <div className = 'head-name'>
                <h1> Non-Veg </h1>
            </div>
            
            <div className="vegies-row">
                <Product
                id="19"
                title="Chicken 1kg"
                price={240}
                image="Chicken.png" />

                <Product
                id="20"
                title="Mutton 1kg"
                price={550}
                image="Meat.png" />

                <Product
                id="21"
                title="Chicken Sausage 400 gm"
                price={240}
                image="Chicken Sausage.png" />
            </div>

            <div className="vegies-row">
                <Product
                id="22"
                title="Mutton Kebabs 500 gm"
                price={300}
                image="Mutton Kebabs.png" />

                <Product
                id="23"
                title="Chicken Kebabs 400 gm"
                price={190}
                image="Chicken Kebabs.png" />

                <Product
                id="24"
                title="Chicken Salami 300 gm"
                price={150}
                image="Chicken Salami.png" />
            </div>

            <div className="vegies-row">
                <Product
                id="non-veg-7"
                title="Eggs 30 count"
                price={210}
                image="Eggs.png" />

                <Product
                id="23"
                title="Rohu Fish"
                price={310}
                image="Rohu Fish.png" />

                <Product
                id="24"
                title="Prawns"
                price={350}
                image="Prawns.png" />
            </div>

            </div>
            
        </div>
    )
}

export default Frozen
