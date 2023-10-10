
import MenuGridItem from './MenuGridItem';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDishes } from './actions/dishActions';
import Loading from './Loading'
import Error from './Error'


export default function MenuGrid({ menuSectionTitle, menuCategory }) {
    // const fetchData = async () => {
    //     const data = await axios.get('https://italian-restaurant-server.onrender.com/api/dishes/getalldishes')
    //     console.log(data)
    // }

    // useEffect(() => {
    //     return () => {
    //         fetchData();
    //     }
    // }, [])


    const dispatch = useDispatch()

    const dishesstate = useSelector(state => state.getAllDishesReducer)

    const { dishes, error, loading } = dishesstate;

    useEffect(() => {
        dispatch(getAllDishes())
    }, [])

    return (
        <div className="menu__grid">
            <h2 className="menu__title center section-title mt3">{menuSectionTitle}</h2>
            {loading ? (<Loading />) : error ? (<Error message="There's been an error while loading the menu." />) : (
                dishes.map((dish) => {

                    if (dish.category === menuCategory) {
                        return (
                            <MenuGridItem key={dish._id} dish={dish} />
                        )
                    }

                })
            )}
        </div>

    )
}