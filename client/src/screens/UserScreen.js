import React from 'react'
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { getUserOrders } from '../actions/orderActions'

export default function UserScreen() {
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState;


    return (
        <>
            <div className="header-and-hero UserScreen">
                <Navbar />
                <PageTitle content="User Dashboard" />
            </div>
            <div className="mt3 margins mb3">
                <div className="UserScreen__wrapper">
                    <h2 className="ff-kaushan">Your details:</h2>
                    <div className="UserScreen__details mt2 mb2">
                        <div className="UserScreen__details--item"><span>Name:</span> {currentUser.name}</div>
                        <div className="UserScreen__details--item"><span>Email:</span>  {currentUser.email}</div>
                        <div className="UserScreen__details--item"><span>Phone:</span> {currentUser.phone}</div>
                        <div className="UserScreen__details--item"><span>Orders:</span> <Link to="/orders"> See your orders</Link></div>
                    </div>

                </div>


            </div>

        </>
    )
}
