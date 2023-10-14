import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../Error";
import Loading from "../Loading";
import Navbar from '../Navbar';
import PageTitle from '../PageTitle';
// import Success from "../Success";



export default function LoginScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginState;

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }


  return (
    <>
      <div className="header-and-hero ContactScreen">
        <Navbar />
        <PageTitle content="Log in" />
      </div>
      <div className="mb5 mt3 margins">

        <h1 className="mt2 mb2 section-title">Login</h1>

        {loading && (<Loading />)}
        {error && (<Error message="The email or password that you provided are incorrect." />)}

        <div className="login__form mb2 flex-column">
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); }}
              placeholder="Your email"></input>
          </div>
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="email">Password: </label>
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              required
              onChange={(e) => { setPassword(e.target.value); }}
              placeholder="Your password"
            ></input>
          </div>
          <button onClick={login}>Log in</button>
        </div>
        <div > Don't have an account yet? Click <a style={{ color: "var(--clr-accent-red)", fontWeight: "bold" }} href="/#/register">here to register</a> .</div>


      </div>
    </>
  )
}