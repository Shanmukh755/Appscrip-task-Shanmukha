import { IoFlowerOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { CgCloseO } from "react-icons/cg";
import { Link } from "react-router-dom";
import './index.css'
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const [isClickToggle, setIsClickToggle] = useState(false)
    const cartItems = useSelector(state => state.cart.products)
    // console.log(cartItems)
    const onClickToggle = () => {
        setIsClickToggle(true)
    }
    const onClickClose = () => {
        setIsClickToggle(false)
    }
    const navSmall = isClickToggle ? "display-nav" : "close-nav"
    return(
        <nav className='nav-container'>
            <div className='nav-top-section'>
                <div className="row-align">
                    <RxDragHandleHorizontal className="toggle-logo" type="button" onClick={onClickToggle}/>
                    <Link to={'/'} className="nav-link">
                        <IoFlowerOutline className="nav-logo" />
                    </Link>
                </div>
                <h1 className="nav-heading">LOGO</h1>
                <ul className="nav-items-container">
                    <IoSearchOutline className="nav-icon" />
                    <IoHeartOutline className="nav-icon" />
                    <Link to={'/cart'} className="nav-link">
                        <HiOutlineShoppingBag className="nav-icon" style={{margin: "0"}} />
                        <span>{cartItems && cartItems.length}</span>
                    </Link>
                    <HiOutlineUser className="nav-icon user-icon" />
                    <select className="nav-lang">
                        <option>Eng</option>
                        <option>Tel</option>
                        <option>Hin</option>
                    </select>
                </ul>
            </div>
            <ul className={`nav-categories-sm ${navSmall}`}>
                <div className="close-btn-cont">
                    <h2 className="app-logo">LOGO</h2>
                    <CgCloseO className="close-btn" type="button" onClick={onClickClose}/>
                </div>
                <li><a href="#shop">SHOP</a></li>
                <li><a href="#">SKILLS</a></li>
                <li><a href="#">STORIES</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#contactUs">CONTACT US</a></li>
            </ul>
            <ul className="nav-categories">
                <li><a href="#shop">SHOP</a></li>
                <li><a href="#">SKILLS</a></li>
                <li><a href="#">STORIES</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#contactUs">CONTACT US</a></li>
            </ul>
        </nav>
    )
}

export default Header