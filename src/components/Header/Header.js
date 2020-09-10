import React from 'react';
import './Header.css';
import logo from '../../images/amazon_logo.png';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../context/StateProvider';
import {auth} from '../../firebase/firebase';

function Header() {

    // const [{basket, user}, dispatch] = useStateValue();
    const [{basket, user}] = useStateValue();

    function handleAuth() {
        if(user) {
            auth.signOut();
        }
    }
    return (
        <nav className='header'>
            {/* logo */}
            <Link to='/'>
                <img className="header__logo" src={logo} alt='' /> 
            </ Link>
            {/* search-box */}
            <div className='header__search'>
               <input className='header__searchInput' type='text' />
               <SearchIcon  className="header__searchIcon"/>
            </div>
            {/* 3 links */}
            <div className="header__nav">
               <Link to={!user && '/login'} className="header__links">
                    <div onClick={handleAuth} className="header__option">
                         <span className="header__optionOne">{user ? `Hi ${user.email}`: `Hi Guest`}</span>
                        <span  className="header__optionTwo">{user ? 'Sign out' : 'Sign in'}</span>
                    </div>
               </Link>

               <Link to='/' className="header__links">
                    <div className="header__option">
                        <span  className="header__optionOne">Returns</span>
                        <span  className="header__optionTwo"> & Orders</span>
                    </div>
               </Link>

               <Link to='/' className="header__links">
                    <div className="header__option">
                        <span  className="header__optionOne">Your </span>
                        <span className="header__optionTwo">Prime</span>
                    </div>
               </Link>
                {/* basket icon and number*/}
                   <Link to='/checkout' className="header__links">
                    <div className="header__optionBasket">
                    {/* basket icon */} 
                    <ShoppingBasketIcon />
                    {/* numbers of items in the basket */}
                    <span className="header__optionTwo header__basketCount">{basket?.length}</span>
                    </div>
               </Link>
            </div>

        </nav>
    )
}

export default Header
