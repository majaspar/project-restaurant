import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addDish } from "../actions/dishActions";

import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
import AdminPages from '../components/AdminPages'


export default function AddDish() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(true);

  const dispatch = useDispatch()

  const addDishState = useSelector(state => state.addDishReducer)
  const { success, error, loading } = addDishState


  function formHandler(e) {
    e.preventDefault();

    const dish = {
      name,
      description,
      category,
      price,
      isVegetarian
    }

    console.log(dish);
    dispatch(addDish(dish));
  }


  return (
    <>
      <div className="header-and-hero ContactScreen">
        <Navbar />
        <PageTitle content="Admin: Add Item" />
      </div>
      <div className="margins  mb5">
        <AdminPages />
        <h1 className="mt3">Add Dish</h1>



        {loading && (<Loading />)}
        {error && (<Error error='Something went wrong...' />)}
        {success && (<Success success='New item added successfully to the menu.' />)}

        <form onSubmit={formHandler} className="AddDish__form mt3 flex-column">
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="name">Item Name: </label>
            <input
              required
              className=""
              type="text"
              placeholder="name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            /></div>
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="price">Price: </label>
            <input
              required
              type="number"
              step="0.01"
              min={0}
              id="price"
              placeholder="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
            /></div>
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="category">Category: </label>
            <input
              required
              id="category"
              type="text"
              placeholder="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            /></div>
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="description">Description: </label>
            <textarea
              type="text"
              id="description"
              placeholder="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            /></div>
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="isVegetarian" name="isVegetarian">Vegetarian: </label>
            <select
              className="mb2"
              id="isVegetarian"
              value={isVegetarian}
              onChange={e => setIsVegetarian(e.target.value)}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>

          </div>
          <button type='submit'>Add Item</button>
        </form>







      </div>
    </>
  )
}
