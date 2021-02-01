import React from "react";
import "./Home.css";
import Product from './Product.js'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="home3.png"
          alt=""
        />
      
      <div className="home__row">
          <Product
            id="7"
            title="Potatoes 1 kg"
            price={15}
            image="Potatoes.png"
          />
          <Product
            id="2"
            title="Cauliflower 1 kg"
            price={20}
            image="cauliflower.png" />
        </div>

        <div className="home__row">
          <Product
           id="11"
           title="Apples 1 kg"
           price={120}
           image="Apples.png" />
          <Product
            id="15"
            title="Orange 1 kg"
            price={50}
            image="Orange.png"  />
          <Product
            id="10"
            title="Mangoes 1 kg"
            price={70}
            image="Mangoes.png" />
        </div>

        <div className="home__row">
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
      </div>
      
    </div>
    );
};

export default Home;