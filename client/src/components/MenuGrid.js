
import MenuGridItem from './MenuGridItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDishes } from '../actions/dishActions';
import Loading from './Loading'
import Error from './Error'


export default function MenuGrid({ menuSectionTitle, menuCategory, hash }) {

    const dispatch = useDispatch()

    const dishesstate = useSelector(state => state.getAllDishesReducer)

    const { dishes, error, loading } = dishesstate;

    useEffect(() => {
        dispatch(getAllDishes())
    }, [dispatch])

    return (
        <div className="menu__grid" id={hash}>
            <h2 className="menu__title center section-title mt3">{menuSectionTitle}</h2>
            {loading ? (<Loading />) : error ? (<Error message="There's been an error while loading the menu." />) : (
                dishes.map((dish) => {

                    return dish.category === menuCategory && <MenuGridItem key={dish._id} dish={dish} />
                }

                )
            )}
        </div>

    )
}