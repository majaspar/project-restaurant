import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import './AdminScreen.css'
import AdminPages from '../AdminPages'
import Navbar from "../Navbar";
import PageTitle from "../PageTitle";

export default function AdminScreen() {

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  // const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <div className="header-and-hero ContactScreen">
        <Navbar />
        <PageTitle content="Admin" />
      </div>
      <div className="margins AdminScreen mb2">
        <h1 className="mt2 mb3">Admin Panel</h1>

        <AdminPages />


      </div>
    </>
  )
}