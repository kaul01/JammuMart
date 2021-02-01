import React from 'react'
import Product from './Product'
import './Vegies.css'

function Fruits() {
    return (
        <div className="vegies">
            <div className="vegies-container">
            <div className = 'head-name'>
                <h1> Fruits </h1>
            </div>

            <div className="vegies-row">
                <Product
                id="10"
                title="Mangoes 1 kg"
                price={70}
                image="Mangoes.png" />

                <Product
                id="11"
                title="Apples 1 kg"
                price={120}
                image="Apples.png" />

                <Product
                id="12"
                title="Bananas 12 pc"
                price={40}
                image="Bananas.png" />
            </div>

            <div className="vegies-row">
                <Product
                id="13"
                title="Lime 1 kg"
                price={40}
                image="Lime.png" />

                <Product
                id="14"
                title="Melon 1 kg"
                price={60}
                image="Melon.png" />

                <Product
                id="15"
                title="Orange 1 kg"
                price={50}
                image="Orange.png" />
            </div>

            <div className="vegies-row">
                <Product
                id="16"
                title="Guava 1 kg"
                price={40}
                image="Guava.png" />

                <Product
                id="17"
                title="Pomogranate 1 kg"
                price={90}
                image="pomogranate.png" />

                <Product
                id="18"
                title="Kiwi 6 pc"
                price={100}
                image="Kiwi.png" />
            </div>

            <div className="vegies-row">
                <Product
                id="fruits-10"
                title="Grapes 1 kg"
                price={110}
                image="Grapes.png" />

                <Product
                id="fruits-11"
                title="Watermelon 1 pc"
                price={30}
                image="Watermelon.png" />

                <Product
                id="fruits-12"
                title="Avocado 1 kg"
                price={390}
                image="Avocado.png" />
            </div>


            </div>
            
        </div>
    )
}

export default Fruits
