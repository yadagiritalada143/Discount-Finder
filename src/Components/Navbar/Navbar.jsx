import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Assets/logo.png';

const Navbar = () => {

    const [menu, setMenu] = useState("homepage");

   return (
    <div className="navbar">
        <img src={logo} alt=""/>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle show" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                Categories
            </button>
            <ul className="dropdown-menu categories-values" data-popper-placement="bottom-start">
                <li><a className="dropdown-item" href="#">Real Estates</a></li>
                <li><a className="dropdown-item" href="#">Food Delivery</a></li>
                <li><a className="dropdown-item" href="#">Home Services</a></li>
                <li><a className="dropdown-item" href="#">Beauty and Spa</a></li>
                <li><a className="dropdown-item" href="#">Face & Skin</a></li>
                <li><a className="dropdown-item" href="#">Hair Saloon</a></li>
                <li><a className="dropdown-item" href="#">Nail Art</a></li>
            </ul>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("homepage")}}><Link to='/'>HOME</Link>{menu === 'homepage' ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("aboutus")}}><Link to='/aboutus'>ABOUT US</Link>{menu === 'aboutus' ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("mywishlist")}}><Link to='/mywishlist'>MY WISH LIST</Link>{menu === 'mywishlist' ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("blogpage")}}><Link to='/blogpage'>BLOG</Link>{menu === 'blogpage' ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("help")}}><Link to='/help'>HELP</Link>{menu === 'help' ? <hr /> : <></>}</li>
        </ul>
        <div className="signinup-button">
            <button type="button" className="btn btn-dark">Sign in/Up</button>
        </div>
    </div>
  )
}

export default Navbar;