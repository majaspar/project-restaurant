import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Error from "../Error";
import Loading from "../Loading";
import Success from "../Success";
import Navbar from '../Navbar';
import PageTitle from '../PageTitle';

export default function RegisterScreen() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')

  const registerState = useSelector(state => state.registerUserReducer);

  const { error, loading, success } = registerState;

  const dispatch = useDispatch();

  function register() {

    if (password !== rePassword) {
      alert('Passwords do not match')
    }
    else if (password.length < 6 || password.length > 15) {
      alert('Password must consist of 6 to 15 characters.')
    } else if (!email.includes('@')) {
      alert('Please provide a valid email address.')
    }
    else {
      const user = { name, email, password }
      console.log(user);
      dispatch(registerUser(user))
    }
  }
  return (
    <>
      <div className="header-and-hero ContactScreen">
        <Navbar />
        <PageTitle content="Register" />
      </div>
      <div className="mt3 mb5 margins">

        {loading && (<Loading />)}
        {success && (<Success message="User registered successfully." />)}
        {error && (<Error message="Please check all the provided information." />)}


        <div className="register__form flex-column">
          <h1 className="mt2 mb2">Register form</h1>
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="name">Name: </label>
            <input type="text" id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="email">Email: </label>
            <input type="email" id="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="password">Password: </label>
            <input type="password" id="password" placeholder="Enter password"
              maxLength={15} value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="repassword">Re-enter password: </label>
            <input type="password" id="repassword" placeholder="Re-enter password"
              value={rePassword} onChange={(e) => setRePassword(e.target.value)}></input>
          </div>
          <div id="" className="form__labelled-item"></div>
          <button onClick={register} className="mt1">Register</button>
        </div>

        <div className="mt5">Already have an account? <a style={{ color: "var(--clr-accent-red)", fontWeight: "bold" }} href="/login">Log in here.</a></div>
      </div>
    </>
  )
}
