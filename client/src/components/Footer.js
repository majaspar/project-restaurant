import SocialMediaIcons from './SocialMediaIcons'

import { logoutUser } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";



export default function Footer() {

    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState;

    const dispatch = useDispatch();

    return (
        <footer className="footer">
            <div className="footer__wrapper margins">
                <div className="footer__column flex-column">
                    <div className="header__logo"> Italian <i className="fa-solid fa-utensils"></i><br />Restaurant</div>
                    <p className="mt2 footer__p justify">The most delicious flavours that Italian Cuisine has to offer!
                        Have a glass of splendid Sicilian wine and feel like you're on vacatation in sunny Italy.
                        Now you can also order your favourite dishes for collection or delivery.</p>

                </div>
                <div className="footer__column Footer__navigation flex-column">
                    <h3 className="mb1 uppercase">Navigation</h3>
                    <a href="/" className=" link--white">Home</a>
                    <a href="/#/menu" className=" link--white">Menu</a>
                    <a href="/#/gallery" className=" link--white">Gallery</a>
                    <a href="/#/about" className=" link--white">About</a>
                    <a href="/#/contact" className=" link--white">Contact</a>
                    {/* <a href="#" className=" link--white">Privacy Policy</a> */}

                </div>
                <div className="footer__column flex-column">

                    <h3 className="mb1 uppercase">Social Media</h3>
                    <SocialMediaIcons />

                    <h3 className="mt2 mb1 uppercase">Book a Table</h3>
                    <a href="tel:+447788990011" className="footer__book">07788990011</a>
                </div>
                <div className="footer__column flex-column">
                    <h3 className="mb1 uppercase">User Panel</h3>
                    {!currentUser && <a href="/#/login" className=" link--white">Login</a>}
                    {!currentUser && <a href="/#/register" className=" link--white">Register</a>}
                    {currentUser && <a href="/#/orders" className=" link--white">My Orders</a>}
                    {currentUser && <button className="no-button link--white" onClick={() => { dispatch(logoutUser()) }}>Log out</button>}
                </div>
            </div>
            <hr className="margins mt3" />
            <div className="center mt3">&copy; Italian Restaurant 2023 | Designed & Developed by <a href="https://lenaesposito.co.uk" className="uppercase link--white">Lena
                Esposito</a></div>
        </footer >
    )
}