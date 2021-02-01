import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";


function Product({ id, title, image, price}) {

  const [{ basket }, dispatch] = useStateValue();

  console.log("This is the basket >>> " , basket)
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };
 
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
      </div>

      <img src={image} alt="" />

      <div className='product-price'>
      <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
      <br />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;