import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { db ,auth  } from "./firebase";
import firebase from 'firebase/app'


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const orders = db.collection('users').doc(user?.email).collection('orders');
    const [formValue, setFormValue] = useState('');

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();

        if(user){
            orders.add({
                address:formValue,
                created: firebase.firestore.FieldValue.serverTimestamp(),
                user: user?.email,
                amount: getBasketTotal(basket),
                basket: basket
            })

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        }else{
            alert('Please Login First!!')
        }

           

    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        {basket?.length} items
                        )
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Total Payable Amount : </h3>
                    </div>
                    <div className='payment__address'>
                    ₹ {getBasketTotal(basket)}
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                            <h3>Payment Method</h3>
                    </div>
                    <div className='payment__address'>
                        The Payment Method for all Orders is Cash On Delivery (COD)
                    </div>
                </div>
            

                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Address</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Enter your complete address here..." />
                            <br />
                            <br />

                            <button className='pay_button' type="submit" disabled={!formValue}>
                                    Place Order
                            </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment