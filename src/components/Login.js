import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'; 
import logo from '../images/amazon_logo.png';

function Login() {
    const [ email, setEmail] = React.useState('');
    const [ password, setPassword] = React.useState('');

    function signIn(e) {
        e.preventDefault()
    } 
    function register(e) {
        e.preventDefault()
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
