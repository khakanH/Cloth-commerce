import React from 'react';
import './header.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assest/crown.svg';

const Header =()=>(
<div className='header'>
    <Link className="logo-container" to='/'>
        <Logo className='logo'/>
    </Link>
    <div className='options'>
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        <Link className='option' to="/registration">REGISTER</Link>
    </div>
</div>

)
export default Header;