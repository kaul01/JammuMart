import React from 'react'
import Product from './Product'
import './Vegies.css'

function Vegies() {
    return (
        <div className='vegies'>
            <div className='vegies-container'>
            <div className = 'head-name'>
                <h1> Vegies </h1>
            </div>

                <div className='vegies-row'>
                    <Product
                        id="1"
                        title="Lettuce 1 kg"
                        price={40}
                        image="lettuce.png" />

                        <Product
                        id="2"
                        title="Cauliflower 1 kg"
                        price={30}
                        image="cauliflower.png" />

                        <Product
                        id="3"
                        title="Broccoli 1 kg"
                        price={50}
                        image="Broccoli.png" />
                </div>

                <div className='vegies-row'>
                    <Product
                        id="4"
                        title="Eggplant 1 kg"
                        price={60}
                        image="Eggplant.png" />

                        <Product
                        id="5"
                        title="Mushrooms 1 packet"
                        price={25}
                        image="Mushrooms.png" />

                        <Product
                        id="6"
                        title="Bhindi 1 kg"
                        price={40}
                        image="Bhindi.png" />
                </div>

                <div className='vegies-row'>
                    <Product
                        id="7"
                        title="Potatoes 1 kg"
                        price={15}
                        image="Potatoes.png" />

                        <Product
                        id="8"
                        title="Tomatoes 1 kg"
                        price={30}
                        image="Tomatoes.png" />

                        <Product
                        id="9"
                        title="Onions 1 kg"
                        price={40}
                        image="Onions.png" />
                </div>

                <div className='vegies-row'>
                    <Product
                        id="vegies-10"
                        title="Carrots 1 kg"
                        price={11}
                        image="Carrots.png" />

                        <Product
                        id="vegies-11"
                        title="Coriander Leaves 100 gm"
                        price={15}
                        image="Coriander.png" />

                        <Product
                        id="vegies-12"
                        title="Capsicum - Green 500 gm"
                        price={20}
                        image="Capsicum.png" />
                </div>

                <div className='vegies-row'>
                    <Product
                        id="vegies-13"
                        title="Cucumber 500 gm"
                        price={15}
                        image="Cucumber.png" />

                        <Product
                        id="vegies-14"
                        title="Green Chilies 100 gm"
                        price={5}
                        image="Green Chilies.png" />

                        <Product
                        id="vegies-15"
                        title="Cabbage 1 kg"
                        price={40}
                        image="Cabbage.png" />
                </div>


            </div>
            
        </div>
    )
}

export default Vegies
