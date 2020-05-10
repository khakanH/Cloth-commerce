import React from 'react';
import './header.scss'
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase";
import {ReactComponent as Logo} from '../../assest/crown.svg';

const Header =({currentUser})=>(
<div className='header'>
    <Link className="logo-container" to='/'>
        <Logo className='logo'/>
    </Link>
    <div className='options'>
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        {currentUser ?
        <div className="option" onClick={()=> auth.signOut()  }>SIGNOUT</div>
        :
        <Link className='option' to="/registration">SIGNIN</Link>
        }


       
    </div>
</div>

)
export default Header;