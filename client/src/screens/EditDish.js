import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editDish, getDishById } from "../actions/dishActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
import AdminPages from '../components/AdminPages'
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";

export default function EditDish() {

  const { pathname } = useLocation();
  const match = pathname.replace("/admin/editdish/", "");
  console.log(match)
  const dispatch = useDispatch()


  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isVegetarian, setIsVegetarian] = useState();

  const getDishByIdState = useSelector((state) => state.getDishByIdReducer);

  const { dish, error, loading } = getDishByIdState;

  const editDishState = useSelector((state) => state.editDishReducer)

  const { editLoading, editSuccess } = editDishState;

  useEffect(() => {

    if (dish) {

      if (dish._id === match) {
        setName(dish.name)
        setDescription(dish.description)
        setCategory(dish.category)
        setPrice(dish.price)
        setIsVegetarian(dish.isVegetarian)
      }
      else {
        dispatch(getDishById(match));
      }
    }
    else {
      dispatch(getDishById(match));
    }

  }, [dish, match]);




  function formHandler(e) {
    e.preventDefault();

    const editedDish = {
      _id: match,
      name,
      description,
      category,
      price,
      isVegetarian

    };

    dispatch(editDish(editedDish))
  }


  return (
    <>
      <div className="header-and-hero ContactScreen ">
        <Navbar />
        <PageTitle content="Admin: Edit Item" />
      </div>
      <div className="margins mt7  mb5">
        <AdminPages />
        <h1 className="mt3">Edit Dish</h1>
        {loading && <Loading />}
        {error && <Error message="Something went wrong..." />}
        {editSuccess && (<Success message='You have edited the item successfully.' />)}
        {editLoading && (<Loading />)}

        <form onSubmit={formHandler} className="EditDish__form mt3 flex-column">
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="name">Item Name: </label>
            <input
              type="text"
              placeholder="name"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}

            /></div>
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="price">Price: </label>
            <input
              type="number"
              min={0}
              id="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
            /></div>
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="category">Category: </label>
            <input
              id="category"
              type="text"
              value={category}
              onChange={e => setCategory(e.target.value)}
            /></div>
          <div className="form__labelled-item">
            <label className="form__label" htmlFor="description">Description: </label>
            <textarea
              type="text"
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
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
          <button type="submit">Edit Dish</button>
        </form>

      </div>
    </>
  )
}