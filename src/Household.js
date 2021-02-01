import React from 'react'
import Product from './Product'
import './Vegies.css'

function Household() {
    return (
        <div className="vegies">
        <div className="vegies-container">
        <div className = 'head-name'>
                <h1> Households </h1>
        </div>
        
        <div className="vegies-row">
        <Product
        id="31"
        title="Dishwasher Gel 1L can"
        price={315}
        image="Dishwasher gel.png" />

        <Product
        id="32"
        title="Vim Bar 3 X 200gm"
        price={45}
        image="Vim Bar.png" />

        <Product
        id="33"
        title="Odonil Set of 3"
        price={120}
        image="Odonil.png" />

        <Product
        id="34"
        title="Domex 1L"
        price={90}
        image="Domex.png" />
        </div>

        <div className="vegies-row">
        <Product
        id="35"
        title="Princeware Packaging Container Pack (6 No's)"
        price={100}
        image="Princeware Packaging Container Pack (6 No's).png" />

        <Product
        id="36"
        title="Signoraware Container Center Press (900 Ml)"
        price={60}
        image="Signoraware Container Center Press (900 Ml).png" />

        <Product
        id="37"
        title="Ship Stainless Steel Sauce Pan Single (1 Pc)"
        price={450}
        image="Ship Stainless Steel Sauce Pan Single (1 Pc).png" />
        </div>

        <div className="vegies-row">
        <Product
        id="38"
        title="Fortune 5L"
        price={760}
        image="Fortune 5L.png" />

        <Product
        id="39"
        title="India Gate Basmati Rice 5Kg"
        price={440}
        image="India Gate Basmati Rice 5Kg.png" />

        <Product
        id="40"
        title="Glucon-D 400 gm"
        price={130}
        image="Glucon-D.png" />

        <Product
        id="41"
        title="Surf Excel"
        price={40}
        image="Surf Excel.png" />
        </div>

        </div>
        
    </div>
    )
}

export default Household
