import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { collectOrder, deliverOrder, getAllOrders } from "../actions/orderActions";

import './AdminScreen.css';

import Error from "../Error";
import Loading from "../Loading";
import Navbar from "../Navbar";
import PageTitle from "../PageTitle";
import AdminPages from '../AdminPages'
//import Filter from "../Filter";

export default function OrdersList() {

  const dispatch = useDispatch();
  const getOrdersState = useSelector((state) => state.getAllOrdersReducer);
  const { loading, error, orders } = getOrdersState;
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);


  return (
    <>
      <div className="header-and-hero ContactScreen">
        <Navbar />
        <PageTitle content="Admin: All Orders" />
      </div>
      <div className="OrdersList margins mb5">
        <AdminPages />
        <h1 className="mt3">Orders List</h1>
        {loading && (<Loading />)}
        {error && (<Error message='Something went wrong...' />)}


        <div className="OrdersList__wrapper mt3">
          <table className="OrdersList__table">
            <thead className="">
              <tr>
                <th>IDs</th>
                <th>Email</th>
                <th>Name</th>
                <th>Col/Del</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Items</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {orders &&
                orders.map((order) => {
                  return (
                    < tr key={order._id} >
                      <td>Order ID: {order._id}<br />
                        User ID: {order.userId}</td>
                      <td>{order.email}</td>
                      <td>{order.name}</td>
                      <td>{order.delivery ? "Delivery" : "Collection"}</td>
                      <td className="center">£{(order.orderAmount).toFixed(2)}</td>
                      <td>{order.createdAt.substring(0, 10)}</td>
                      <td>{order.items.map((item) => {
                        return (
                          <p style={{ fontSize: "0.9rem" }}>{item.name} x {item.qty}</p>
                        )
                      })
                      }</td>
                      <td className="center">
                        {(!order.isCollected && !order.isDelivered) && <div className="OrdersList__status flex">
                          <button className="btn OrdersList__collected"
                            onClick={() => { dispatch(collectOrder(order._id)) }}>Mark as Collected</button>
                          <button className="btn OrdersList__delivered"
                            onClick={() => { dispatch(deliverOrder(order._id)) }}>Mark as Delivered</button></div>}


                        {order.isCollected && <span className="">Collected <i className="fa-solid fa-circle-check"></i></span>}

                        {order.isDelivered && <span className="">Delivered <i className="fa-solid fa-circle-check"></i></span>}

                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div >
    </>
  )
}
