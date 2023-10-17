import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteDish, getAllDishes } from "../actions/dishActions";

// /import Filter from "../components/Filter";

import Navbar from "../Navbar";
import PageTitle from "../PageTitle";
import Error from "../Error";
import Loading from "../Loading";
import AdminPages from '../AdminPages';
import DeleteModal from "../DeleteModal";

export default function DishesList() {

  const dispatch = useDispatch();

  const dishesState = useSelector((state) => state.getAllDishesReducer);
  const { dishes, error, loading } = dishesState;

  useEffect(() => {
    dispatch(getAllDishes());
  }, []);




  return (
    <>
      <div className="header-and-hero ContactScreen">
        <Navbar />
        <PageTitle content="Admin: Menu Items" />
      </div>
      <div className="DishesList margins mb5">
        <AdminPages />
        <h1 className="mt3">Dishes List</h1>
        {loading && (<Loading />)}
        {error && (<Error message='Something went wrong...' />)}

        <div className="DishesList__wrapper mt3">
          <table className='DishesList__table'>

            <thead className=''>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dishes && dishes.map(dish => {

                const delDish = () => dispatch(deleteDish(dish._id))

                return <tr key={dish._id}>
                  <td>{dish.name}</td>
                  <td>

                    Price : £{(dish.price).toFixed(2)} <br />

                  </td>
                  <td>{dish.category}</td>
                  <td className="DishesList__actions">

                    <DeleteModal itemToDelete={dish.name} del={delDish} />
                    {/* <Link to={`/admin/editdish/${dish._id}`}><i className='fa fa-edit'></i></Link> */}
                  </td>

                </tr>

              })}
            </tbody>

          </table>
        </div>
      </div>
    </>
  )
}
