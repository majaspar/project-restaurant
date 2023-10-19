import axios from 'axios';


export const getAllDishes = () => async (dispatch) => {

    dispatch({ type: 'GET_DISHES_REQUEST' })

    try {
        const response = await axios.get('/api/dishes/getalldishes')
        //console.log(response)
        dispatch({ type: 'GET_DISHES_SUCCESS', payload: response.data })
    }

    catch (error) {
        dispatch({ type: 'GET_DISHES_FAILED', payload: error })
    }
}


export const getDishById = (dishId) => async dispatch => {

    dispatch({ type: 'GET_DISHBYID_REQUEST' })

    try {
        const response = await axios.post('/api/dishes/getdishbyid', { dishId })
        console.log(response);
        dispatch({ type: 'GET_DISHBYID_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_DISHBYID_FAILED', payload: error })
    }

}

export const filterDishes = (searchkey, category) => async dispatch => {


    dispatch({ type: 'GET_DISHES_REQUEST' })

    try {
        var filteredDishes;
        const response = await axios.get('/api/dishes/getalldishes')
        filteredDishes = response.data.filter(dish => dish.name.toLowerCase().includes(searchkey))

        if (category !== 'all') {
            filteredDishes = response.data.filter(dish => dish.category.toLowerCase() === category)

        }
        dispatch({ type: 'GET_DISHES_SUCCESS', payload: filteredDishes })
    } catch (error) {
        dispatch({ type: 'GET_DISHES_FAILED', payload: error })
    }

}

export const addDish = (dish) => async dispatch => {
    dispatch({ type: 'ADD_DISH_REQUEST' })
    try {
        const response = await axios.post('/api/dishes/adddish', { dish })
        console.log(response);
        dispatch({ type: 'ADD_DISH_SUCCESS' })
        setTimeout(function () { window.location.href = '/admin/disheslist' }, 2000);

    } catch (error) {
        dispatch({ type: 'ADD_DISH_FAILED', payload: error })
    }
}

export const editDish = (editedDish) => async dispatch => {
    dispatch({ type: 'EDIT_DISH_REQUEST' })
    try {
        const response = await axios.post('/api/dishes/editdish', { editedDish })
        console.log(response);
        dispatch({ type: 'EDIT_DISH_SUCCESS' })
        window.location.href = '/admin/disheslist'
    } catch (error) {
        dispatch({ type: 'EDIT_DISH_FAILED', payload: error })
    }
}

export const deleteDish = (dishId) => async dispatch => {

    try {
        const response = await axios.post('/api/dishes/deletedish', { dishId })
        alert('Dish deleted successfully.')
        console.log(response);
        window.location.reload()
    } catch (error) {
        alert('Something went wrong...')
        console.log(error);
    }


}