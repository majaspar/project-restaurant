import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./actions/userActions";
import SocialMediaIcons from './SocialMediaIcons';
import Success from "./Success";
import Tooltip from '@mui/material/Tooltip';

export default function Navbar() {

  const cartState = useSelector(state => state.cartReducer);
  const userState = useSelector(state => state.loginUserReducer)
  const { currentUser } = userState;
  const dispatch = useDispatch();


  //dropdown menu when logged in
  const dropDown = () => {
    const items = document.getElementById('login__dropdown--items')
    const arrow = document.getElementById('login__dropdown--arrow')
    items.classList.toggle('show');

    if (items.classList.contains('show')) {
      arrow.style.transform = "rotate(90deg)"
    } else {
      arrow.style.transform = "rotate(0deg)"
    }
  }


  //change navbar bg color when scrolling
  const [navBg, setNavBg] = useState(false)
  const changeNavbar = () => {
    if (window.scrollY >= 100) {
      setNavBg(true)
    } else {
      setNavBg(false)
    }
  }

  window.addEventListener('scroll', changeNavbar)


  //open navigation on small screens
  const openNav = () => {
    document.getElementById('nav').style.transform = "translateX(0)"
  }

  const closeNav = () => {
    document.getElementById('nav').style.transform = "translateX(100%)"
  }
  return (
    <header className={navBg ? 'header header__navOnScroll' : 'header'}>

      <div className="header__wrapper flex margins">
        <a href="/" alt="go to homepage"><div className="header__logo"> Italian <i className="fa-solid fa-utensils"></i> Restaurant</div></a>
        <button id="openIcon" className="header__open--nav" alt="open navigation" onClick={openNav}><i className="fa-solid fa-bars"></i></button>
        <nav id="nav" className="nav flex">

          <ul className="nav__list">
            <div className="nav__list--closeX grid" alt="close navigation" onClick={closeNav}><i className="fa-solid fa-x"></i></div>
            <li className="nav__list--item content__item HomeLink"><a className="link link--dia" href="/" alt="go to homepage">Home</a></li>
            <li className="nav__list--item content__item MenuLink"><a className="link link--dia" href="/#/menu" alt="go to restaurant's menu">Menu</a></li>
            <li className="nav__list--item content__item GalleryLink"><a className="link link--dia" href="/#/gallery" alt="go to gallery">Gallery</a></li>
            <li className="nav__list--item content__item AboutLink"><a className="link link--dia" href="/#/about" alt="go to about page">About</a></li>
            <li className="nav__list--item content__item ContactLink"><a className="link link--dia" href="/#/contact" alt="go to contact page">Contact</a></li>
            <div className="nav__list--social">
              <hr className="mb2" />
              <SocialMediaIcons />
            </div>
          </ul>
        </nav>
        <div className="header__icon-and-btn flex">

          {currentUser ? (

            <div className="login__dropdown flex-column">
              <div onClick={dropDown} className="login__username flex">
                <sub><i id="login__dropdown--arrow" className="fa-solid fa-caret-right"></i></sub>
                <span>{currentUser.name}</span>
              </div>
              <div id="login__dropdown--items" className="login__dropdown--items">
                {currentUser.isAdmin && <a className="" href="/#/admin" alt="go to admin dashboard"><div className="login__dropdown--item ">Admin</div></a>}
                <a className="" href="/#/orders" alt="see user's orders"><div className="login__dropdown--item ">Orders</div></a>
                <div alt="Log out" className="login__dropdown--item login__logout" onClick={() => { dispatch(logoutUser()) }}>Log out</div>
              </div>

            </div>

          ) : <a alt="go to login page" href="/#/login"><Tooltip title="Login"><i className="header__icon fa-regular fa-user"></i></Tooltip></a>}

          <a alt="go to basket" href="/#/basket"><div className="header__cart"><i className="header__icon fa-solid fa-shopping-basket"></i>
            <sup className="header__cart-items"><span>{cartState.cartItems.length}</span></sup>
          </div></a>
        </div>

      </div>
      <div className="success__msg--wrapper">
        <div id="success__msg" className="success__msg"><Success message="Basket updated!" /></div>
        <div id="success__msg--login" className="success__msg"><Success message="Logging in..." /></div>
        <div id="success__msg--logout" className="success__msg"><Success message="Logging out..." /></div>
      </div>
    </header>
  )
}