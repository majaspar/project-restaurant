import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllOrders } from "../actions/orderActions";
import { deleteUser, getAllUsers } from '../actions/userActions'

import Error from "../Error";
import Loading from "../Loading";
import Navbar from "../Navbar";
import PageTitle from "../PageTitle";
import DeleteModal from "../DeleteModal";
import AdminPages from '../AdminPages'

import './AdminScreen.css'

export default function UsersList() {

    const dispatch = useDispatch()


    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState;

    const usersState = useSelector(state => state.getAllUsersReducer)
    const { error, loading, users } = usersState


    useEffect(() => {

        dispatch(getAllUsers())

    }, [])

    return (
        <>
            <div className="header-and-hero ContactScreen">
                <Navbar />
                <PageTitle content="Admin: Users" />
            </div>
            <div className="UsersList margins  mb5">
                <AdminPages />
                <h1 className="mt3 mb3">Users list</h1>
                {loading && <Loading />}
                {error && <Error message="Something went wrong..." />}
                <div className="UserList__wrapper">
                    <table className='UsersList__table'>
                        <thead className=''>
                            <tr>
                                <th>Name</th>
                                <th>Admin</th>
                                <th>Email</th>
                                <th>Date registered</th>
                                <th>User Id</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users && users.map(user => {
                                const delUser = () => { dispatch(deleteUser(user._id)) };
                                return (
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{(user.isAdmin) ? "YES" : "NO"}</td>
                                        <td>{user.email}</td>
                                        <td>{user.createdAt.substring(0, 10)}</td>
                                        <td>{user._id}</td>
                                        <td className="UsersList__td--delete">
                                            <DeleteModal itemToDelete={user.name} del={delUser} />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>





            </div>
        </>
    )
}
