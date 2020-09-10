import React from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'; 
import logo from '../images/amazon_logo.png';
import { auth } from './firebase';

function Login() {
    const [ email, setEmail] = React.useState('');
    const [ password, setPassword] = React.useState('');
    const history = useHistory()

    function signIn(e) {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))    
    } 

    // create a new user with email and password
    function register(e) {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {   
            // console.log(auth)
            // if true, redirect
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
        // Users: e.g: test@test.tt pass: 123123123 uniq id: USwknPlWxXPazmlDXwPb9NAJZg93
    } 

    return (
        <div className='login'>
            <Link to="/"><img className="login__logo" src={logo} alt='logo' /></Link>
            <div className='login__box'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password'  value={password}  onChange={e => setPassword(e.target.value)} />
                    <button  type='submit' className="login__signInBtn" onClick={signIn}>Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button  onClick={register} className='login__registerBtn'>Create your Amazon account</button>
            </div>
            <div></div>
        </div>
    )
}

export default Login
