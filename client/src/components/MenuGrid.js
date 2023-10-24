
import MenuGridItem from './MenuGridItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDishes } from '../actions/dishActions';
import Loading from './Loading'
import Error from './Error'
import { motion } from 'framer-motion'


export default function MenuGrid({ menuSectionTitle, menuCategory, hash }) {

    const fadeAnimVariants = {
        hidden: {
            opacity: 0
        },
        visible: (index: number) => ({
            opacity: 1,
            transition: { delay: 0.05 * index }
        })
    }

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
                dishes.map((dish, index) => {

                    return dish.category === menuCategory && <motion.li
                        variants={fadeAnimVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true
                        }}
                        custom={index}
                        key={dish._id}><MenuGridItem dish={dish} /></motion.li>
                }

                )
            )}
        </div>

    )
}