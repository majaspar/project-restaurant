import React from 'react'
import { Link } from "react-router-dom";

export default function AdminPages() {
    return (<>
        <ul className="AdminScreen__list flex mt2">
            <h3>Admin Pages</h3>
            <li><Link to={'/admin/userslist'}>Registered Users</Link> </li>
            <li><Link to={'/admin/disheslist/'}>Menu Items</Link></li>
            <li><Link to={'/admin/adddish'}>Add an item to Menu</Link></li>
            <li><Link to={'/admin/orderslist'}>Orders</Link></li>

        </ul>
        <hr className="mt2 mb2" />
    </>
    )
}
