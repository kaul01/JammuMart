import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import firebase from 'firebase/app';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const signInWithGoogle = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        auth
            .signInWithPopup(provider)
            .then((auth) => {
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
      }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='logo.png' 
                    alt=""
                />
            </Link>
 
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    To Create a Account Enter Your Email-Id and Password and then Click on 'Create your JammuMart Account'
                </p>

                <button onClick={register} className='login__registerButton'>Create your JammuMart Account</button>
            </div>

            <br />
            <br />
            

            <div class="g-signin2" data-width="300" data-height="200" data-longtitle="true">
            <button className="sign-in" onClick={signInWithGoogle} >
            <img 
            className='google-img'
            src='Google.png'
            alt="" />
             </button>
            </div>



            

        </div>
    )
}


export default Login